from selenium import webdriver
from selenium.common.exceptions import TimeoutException
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.by import By
from selenium.webdriver.common.desired_capabilities import DesiredCapabilities
from selenium.webdriver.chrome.options import Options
import requests
import urllib.parse as urlparse
from os import environ
import logging

log = logging.getLogger('django')


def _get_instagram_auth_token(headless=True, docker_driver=True):
    try:
        REDIRECT_URI = environ['INSTAGRAM_REDIRECT_URI']
        CLIENT_ID = environ['INSTAGRAM_CLIENT_ID']
        CLIENT_SECRET = environ['INSTAGRAM_CLIENT_SECRET']
        USERNAME = environ['INSTAGRAM_USERNAME']
        PASSWORD = environ['INSTAGRAM_PASSWORD']
        ACCESS_CODE_URL = f'https://api.instagram.com/oauth/authorize/?client_id={CLIENT_ID}&redirect_uri={REDIRECT_URI}&response_type=code'
        ACCESS_TOKEN_URL = 'https://api.instagram.com/oauth/access_token'
    except Exception as e:
        log.error(f'Instagram data pull missing environment variables => {e}')

    DRIVER_TIMEOUT = 10

    return_token = None

    try:
        if docker_driver:
            driver = webdriver.Remote(command_executor='http://selenium:4444/wd/hub',
                                      desired_capabilities=DesiredCapabilities.CHROME, )
        else:
            chrome_options = Options()
            chrome_options.headless = headless
            driver = webdriver.Chrome(chrome_options=chrome_options)

        driver.get(ACCESS_CODE_URL)
        form_present = EC.presence_of_element_located((By.TAG_NAME, 'form'))
        WebDriverWait(driver, DRIVER_TIMEOUT).until(form_present)

        element = driver.find_element_by_name("username")
        element.send_keys(USERNAME)
        element = driver.find_element_by_name("password")
        element.send_keys(PASSWORD)
        element.submit()

        WebDriverWait(driver, DRIVER_TIMEOUT).until_not(form_present)
        access_code = urlparse.parse_qs(urlparse.urlparse(driver.current_url).query)['code']

        data = {
            'client_id': CLIENT_ID,
            'client_secret': CLIENT_SECRET,
            'grant_type': 'authorization_code',
            'redirect_uri': REDIRECT_URI,
            'code': access_code}

        response = requests.post(url=ACCESS_TOKEN_URL, data=data)

        return_token = response.json()['access_token']

    except TimeoutException as te:
        log.error(f'Timeout during Instagram data pull => {te}')

    except Exception as e:
        log.error(f'Exception thrown during Instagram data pull => {e}')

    else:
        driver.close()

    return return_token

def _parse_recent_media():
    recent_media_url = "https://api.instagram.com/v1/users/self/media/recent/"
    auth_params = {'access_token': _get_instagram_auth_token()}
    try:
        return requests.get(url=recent_media_url, params=auth_params).json()['data']
    except Exception as e:
        log.error(f'INSTAGRAM DATA FAILURE => {e}')
        return None

def retrieve_recent_media():
    recent_media = _parse_recent_media()
    if recent_media is not None:
        #TODO: query the DB for all the id's? or is there a better method to check if an id is already in the db?
        for media in recent_media:
            # TODO: have a factory method for creating the new posts and putting them in the DB?

            # TODO: Make sure to convert the created_time to a datetime object
                # utc_dt = datetime.utcfromtimestamp(media['created_time']).replace(tzinfo=pytz.utc)
            log.info(media['id'])
        return True
    return  False

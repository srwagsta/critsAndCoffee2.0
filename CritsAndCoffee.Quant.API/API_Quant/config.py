import os


DEBUG = True
SECRET_KEY = os.environ['QUANT_API_SECRET_KEY']

SQLALCHEMY_DATABASE_URI = os.environ['DATABASE_URL']
SQLALCHEMY_TRACK_MODIFICATIONS = False

QUANDL_API_KEY = os.environ['QUANDL_API_KEY']

ACCEPTED_CLAIMS_SET = set([x.strip().lower() for x in
                          (os.environ.get('ACCEPT_TOKEN_CLAIMS').split(','))])

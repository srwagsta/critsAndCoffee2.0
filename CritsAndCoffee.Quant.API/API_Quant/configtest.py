import os


DEBUG = True
SECRET_KEY = os.environ['QUANT_API_SECRET_KEY']

SQLALCHEMY_DATABASE_URI = os.environ['DATABASE_URL']
import os
import environ

env = environ.Env()


DEBUG = True
SECRET_KEY = os.environ['QUANT_API_SECRET_KEY']

SQLALCHEMY_DATABASE_URI = env.db('DATABASE_URL')
SQLALCHEMY_TRACK_MODIFICATIONS = False


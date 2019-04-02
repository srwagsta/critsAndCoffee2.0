from flask import Flask
from API_Logger import api
from logging.handlers import RotatingFileHandler
import logging


def create_app(config=None, testing=False):
    """Application factory, used to create application
    """
    file_logger = RotatingFileHandler('/crits-logs/critsAndcoffee.log', maxBytes=1024 * 1024 * 15, backupCount=10)
    file_logger.setLevel(logging.INFO)

    app = Flask('API_Logger')
    app.logger.addHandler(file_logger)
    configure_app(app, testing)
    register_blueprints(app)

    return app


def configure_app(app, testing=False):
    """set configuration for application
    """
    # default configuration
    app.config.from_object('API_Logger.config')

    if testing is True:
        # override with testing config
        app.config.from_object('API_Logger.configtest')
    else:
        # override with env variable, fail silently if not set
        app.config.from_envvar("API_LOGGER_CONFIG", silent=True)


def register_blueprints(app):
    """register all blueprints for application
    """
    app.register_blueprint(api.views.blueprint)

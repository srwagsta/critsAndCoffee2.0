from flask import Flask
from API_Quant import api
from API_Quant.extensions import db, migrate
import sentry_sdk
from sentry_sdk.integrations.flask import FlaskIntegration
import os


def create_app(config=None, testing=False, cli=False):
    """Application factory, used to create application
    """

    sentry_sdk.init(
        dsn=os.environ.get('SENTRY_DNS'),
        integrations=[FlaskIntegration()]
    )

    app = Flask('API_Quant')

    configure_app(app, testing)
    configure_extensions(app, cli)
    register_blueprints(app)

    return app


def configure_app(app, testing=False):
    """set configuration for application
    """
    # default configuration
    app.config.from_object('API_Quant.config')

    if testing is True:
        # override with testing config
        app.config.from_object('API_Quant.configtest')
    else:
        # override with env variable, fail silently if not set
        app.config.from_envvar("API_QUANT_CONFIG", silent=True)


def configure_extensions(app, cli):
    """configure flask extensions
    """
    db.init_app(app)

    if cli is True:
        migrate.init_app(app, db)


def register_blueprints(app):
    """register all blueprints for application
    """
    app.register_blueprint(api.views.blueprint)

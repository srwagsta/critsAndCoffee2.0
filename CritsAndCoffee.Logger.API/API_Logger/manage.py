import click
from flask.cli import FlaskGroup

from API_Logger.app import create_app


def create_API_Logger(info):
    return create_app(cli=True)


@click.group(cls=FlaskGroup, create_app=create_API_Logger)
def cli():
    """Main entry point"""


@cli.command("init")
def init():
    """Init application, create database tables
    and create a new user named admin with password admin
    """


if __name__ == "__main__":
    cli()

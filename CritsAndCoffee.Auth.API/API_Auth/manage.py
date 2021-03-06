import click
from flask.cli import FlaskGroup

from API_Auth.app import create_app


def create_API_Auth(info):
    return create_app(cli=True)


@click.group(cls=FlaskGroup, create_app=create_API_Auth)
def cli():
    """Main entry point"""


@cli.command("init")
def init():
    """Init application, create database tables
    and create a new user named admin with password admin
    """
    from API_Auth.extensions import db
    from API_Auth.models import User
    from API_Auth.models.user_roles import UserRoles
    click.echo("create database")
    db.create_all()
    click.echo("done")

    click.echo("create user")
    try:
        user = User(
            first_name='admin_first_name',
            last_name='admin_last_name',
            username='admin',
            email='admin@mail.com',
            password='admin',
            role=UserRoles.ADMIN,
            active=True
        )
        db.session.add(user)
        db.session.commit()
        click.echo("created user admin")
    except Exception as e:
        click.echo(f"Admin used creation failed: ${e}")


if __name__ == "__main__":
    cli()

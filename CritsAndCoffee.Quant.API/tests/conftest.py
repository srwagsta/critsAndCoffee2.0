import json
import pytest

from API_Quant.app import create_app
from API_Quant.extensions import db as _db


@pytest.fixture
def app():
    app = create_app(testing=True)
    return app


@pytest.fixture
def db(app):
    _db.app = app

    with app.app_context():
        _db.create_all()

    yield _db

    _db.session.close()
    _db.drop_all()



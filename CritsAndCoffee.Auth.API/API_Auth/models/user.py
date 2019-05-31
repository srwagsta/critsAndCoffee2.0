from API_Auth.extensions import db, pwd_context
from API_Auth.models.user_roles import UserRoles
from sqlalchemy.dialects.postgresql import ENUM

class User(db.Model):
    """Basic user model
    """
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=False)
    email = db.Column(db.String(80), unique=True, nullable=False)
    password = db.Column(db.String(255), nullable=False)
    role = db.Column(ENUM(UserRoles), default=UserRoles.DEFAULT, nullable=False)
    active = db.Column(db.Boolean, default=True)

    def __init__(self, **kwargs):
        super(User, self).__init__(**kwargs)
        self.password = pwd_context.hash(self.password)

    def __repr__(self):
        return "<User %s>" % self.username

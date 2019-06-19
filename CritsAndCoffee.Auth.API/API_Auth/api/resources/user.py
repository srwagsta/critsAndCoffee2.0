from flask import request
from flask_restful import Resource
from flask_jwt_extended import jwt_required
from API_Auth.models import User
from API_Auth.extensions import ma, db
from API_Auth.commons.pagination import paginate
from API_Auth.commons.decorators import admin_required, root_required


class UserSchema(ma.ModelSchema):

    password = ma.String(load_only=True, required=True)
    # Smart hyperlinking
    _links = ma.Hyperlinks(
        {"self": ma.URLFor("UserResource", id="<id>"), "collection": ma.URLFor("UserList")}
    )

# TODO: If the roles need to be added to the user query results then an encoder for the enum will need to be created
    class Meta:
        model = User
        fields = ("first_name", "last_name", "username", "email", "active", "last_login")
        sqla_session = db.session


class UserResource(Resource):
    """Single object resource
    """
    method_decorators = [jwt_required]

    def get(self, user_id):
        schema = UserSchema()
        user = User.query.get_or_404(user_id)
        return {"user": schema.dump(user).data}

    def put(self, user_id):
        schema = UserSchema(partial=True)
        user = User.query.get_or_404(user_id)
        user, errors = schema.load(request.json, instance=user)
        if errors:
            return errors, 422

        return {"msg": "user updated", "user": schema.dump(user).data}

    @root_required
    def delete(self, user_id):
        user = User.query.get_or_404(user_id)
        db.session.delete(user)
        db.session.commit()

        return {"msg": "user deleted"}


class UserList(Resource):
    """Creation and get_all
    """
    method_decorators = [jwt_required, admin_required]

    def get(self):
        schema = UserSchema(many=True)
        query = User.query
        return paginate(query, schema)

    def post(self):
        schema = UserSchema()
        user, errors = schema.load(request.json)
        if errors:
            return errors, 422

        db.session.add(user)
        db.session.commit()

        return {"msg": "user created", "user": schema.dump(user).data}, 201

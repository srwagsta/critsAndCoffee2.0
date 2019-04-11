from flask import request
from flask_restful import Resource
from API_Quant.extensions import ma, db
from API_Quant.commons.pagination import paginate
from API_Quant.decorators.jwt_validation import jwt_required


# class UserResource(Resource):
#     """Single object resource
#     """
#     method_decorators = [jwt_required]
#
#     def get(self, user_id):
#         schema = UserSchema()
#         user = User.query.get_or_404(user_id)
#         return {"user": schema.dump(user).data}
#
#     def put(self, user_id):
#         schema = UserSchema(partial=True)
#         user = User.query.get_or_404(user_id)
#         user, errors = schema.load(request.json, instance=user)
#         if errors:
#             return errors, 422
#
#         return {"msg": "user updated", "user": schema.dump(user).data}
#
#     def delete(self, user_id):
#         user = User.query.get_or_404(user_id)
#         db.session.delete(user)
#         db.session.commit()
#
#         return {"msg": "user deleted"}
#
#
# class UserList(Resource):
#     """Creation and get_all
#     """
#     method_decorators = [jwt_required]
#
#     def get(self):
#         schema = UserSchema(many=True)
#         query = User.query
#         return paginate(query, schema)
#
#     def post(self):
#         schema = UserSchema()
#         user, errors = schema.load(request.json)
#         if errors:
#             return errors, 422
#
#         db.session.add(user)
#         db.session.commit()
#
#         return {"msg": "user created", "user": schema.dump(user).data}, 201
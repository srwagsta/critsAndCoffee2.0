from flask_restful import Resource
import quandl
from API_Quant.decorators.jwt_validation import jwt_required


class DataList(Resource):
    """Creation and get_all
    """
    method_decorators = []

    def get(self):
        return {'Status': 'Success'}

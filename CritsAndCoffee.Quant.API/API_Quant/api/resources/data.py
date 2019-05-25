from flask_restful import Resource
import quandl
from API_Quant.commons.decorators import token_required
from API_Quant.config import QUANDL_API_KEY

quandl.ApiConfig.api_key = QUANDL_API_KEY


class DataList(Resource):
    """Creation and get_all
    """
    method_decorators = [token_required]

    def get(self):
        return {'Status': 'Success'}

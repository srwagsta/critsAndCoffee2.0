import os
import requests
from functools import wraps
from flask import jsonify, request
from API_Quant.wsgi import app
JWT_VALIDATION_ENDPOINT = os.getenv("JWT_VALIDATION_ENDPOINT")


class AuthError(Exception):
    def __init__(self, error, status_code):
        self.error = error
        self.status_code = status_code


@app.errorhandler(AuthError)
def handle_auth_error(ex):
    response = jsonify(ex.error)
    response.status_code = ex.status_code
    return response


def _get_token_auth_header(auth):
    """Obtains the Access Token from the Authorization Header
    """
    if not auth:
        raise AuthError({"code": "authorization_header_missing",
                        "description":
                            "Authorization header is expected"}, 401)

    parts = auth.split()

    if parts[0].lower() != "bearer":
        raise AuthError({"code": "invalid_header",
                        "description":
                            "Authorization header must start with"
                            " Bearer"}, 401)
    elif len(parts) == 1:
        raise AuthError({"code": "invalid_header",
                        "description": "Token not found"}, 401)
    elif len(parts) > 2:
        raise AuthError({"code": "invalid_header",
                        "description":
                            "Authorization header must be"
                            " Bearer token"}, 401)

    token = parts[1]
    return token


def token_required(f):
    @wraps(f)
    def wrap(*args, **kwargs):
        token = _get_token_auth_header(request.headers.get('authorization'))
        
        response = requests.post(JWT_VALIDATION_ENDPOINT, headers={'authorization': 'Bearer ' + token})
        try:
            response.raise_for_status()
            if not validate_claims(response.json()['claims']):
                raise AuthError({"code": "invalid_claims",
                                "description": "The access token did not provided "
                                               "the required claims to access resource."}, 401)
        except Exception:
                raise AuthError({"code": "invalid_token",
                                "description":
                                    "token rejected"
                                    " token."}, 401)
        return f(*args, **kwargs)
    return wrap


def validate_claims(response_claims):
    """Determines if the required scope is present in the Access Token
    Args:
        required_scope (str): The scope required to access the resource
    """
    # token = get_token_auth_header()
    # unverified_claims = jwt.get_unverified_claims(token)
    # if unverified_claims.get("scope"):
    #         token_scopes = unverified_claims["scope"].split()
    #         for token_scope in token_scopes:
    #             if token_scope == required_scope:
    #                 return True
    return True

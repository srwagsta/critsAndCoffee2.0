from functools import wraps


def jwt_required(f):
    @wraps(f)
    def wrapper(*args, **kwargs):
        token = request.agrs.get('token')
        try:
            pass
        #TODO: Send the token to the django validation and expect 200
        except:
            return jasonify({'error': 'Invalid auth'}), 401
    return wrapper
from rest_framework.decorators import api_view, permission_classes, throttle_classes
from rest_framework.response import Response
from rest_framework.permissions import AllowAny
from rest_framework.throttling import UserRateThrottle
import logging

log = logging.getLogger('api')
INVALID_MASSAGE_FORMAT_MESSAGE = 'Invalid request format attempted logging'

class OneThousandPerHour(UserRateThrottle):
    rate = '1000/hour'

def extract_message(request):
    return_message = None
    try:
        return_message = request.body['log_message']
    except Exception as e:
        log.error(f'{INVALID_MASSAGE_FORMAT_MESSAGE} => {e}')
    return return_message

@api_view(['POST'])
@permission_classes([AllowAny])
@throttle_classes([OneThousandPerHour])
def log_critical_create_view(request):
    message = extract_message(request)
    if message is not None:
        log.critical(message)
        return Response(200)
    return Response(400)

@api_view(['POST'])
@permission_classes([AllowAny])
@throttle_classes([OneThousandPerHour])
def log_error_create_view(request):
    message = extract_message(request)
    if message is not None:
        log.error(message)
        return Response(200)
    return Response(400)

@api_view(['POST'])
@permission_classes([AllowAny])
@throttle_classes([OneThousandPerHour])
def log_warning_create_view(request):
    message = extract_message(request)
    if message is not None:
        log.warning(message)
        return Response(200)
    return Response(400)

@api_view(['POST'])
@permission_classes([AllowAny])
@throttle_classes([OneThousandPerHour])
def log_info_create_view(request):
    message = extract_message(request)
    if message is not None:
        log.info(message)
        return Response(200)
    return Response(400)

@api_view(['POST'])
@permission_classes([AllowAny])
@throttle_classes([OneThousandPerHour])
def log_debug_create_view(request):
    message = extract_message(request)
    if message is not None:
        log.debug(message)
        return Response(200)
    return Response(400)


# TODO: Somehow validate the request did come from my app, without forcing user auth?

from rest_framework.decorators import api_view, permission_classes, throttle_classes
from rest_framework.response import Response
from rest_framework.permissions import AllowAny
from rest_framework.throttling import UserRateThrottle

class OneThousandPerHour(UserRateThrottle):
    rate = '1000/hour'


@api_view(['POST'])
@permission_classes([AllowAny])
@throttle_classes([OneThousandPerHour])
def LogErrorCreateView(request):
    return Response(200)


# TODO: Make all the loggers and tie into the python logger
# TODO: Somehow validate the request did come from my app, without forcing user auth?

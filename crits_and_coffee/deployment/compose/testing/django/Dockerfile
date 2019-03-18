ARG GeoDjango="srwagsta/crits_and_coffee_accessories:geo-django"

FROM node:9-alpine as angular_build

COPY ./angular-frontend/package.json ./
COPY ./angular-frontend/package-lock.json ./

RUN npm set progress=false && npm config set depth 0 && npm cache clean --force

## Storing node modules on a separate layer will prevent unnecessary npm installs at each build
RUN npm i && mkdir /ng-app && cp -R ./node_modules ./ng-app

WORKDIR /ng-app

COPY ./angular-frontend .

## Build the angular app in production mode and store the artifacts in dist folder
RUN $(npm bin)/ng build --prod --output-hashing=none


FROM ${GeoDjango}
COPY ./ /prod-app/
COPY --from=angular_build /ng-app/dist/*.js /prod-app/crits_and_coffee/static/js/angular-app/
COPY --from=angular_build /ng-app/dist/*.css /prod-app/crits_and_coffee/static/css/

# Requirements are installed here to ensure they will be cached.
COPY ./requirements /requirements
RUN pip install --upgrade pip \
    && pip install -r /requirements/local.txt

COPY ./deployment/compose/production/django/entrypoint /entrypoint
RUN sed -i 's/\r//' /entrypoint
RUN chmod +x /entrypoint

COPY ./deployment/compose/testing/django/start /start
RUN sed -i 's/\r//' /start
RUN chmod +x /start

COPY ./deployment/compose/testing/django/celery/worker/start /start-celeryworker
RUN sed -i 's/\r//' /start-celeryworker
RUN chmod +x /start-celeryworker

COPY ./deployment/compose/testing/django/celery/beat/start /start-celerybeat
RUN sed -i 's/\r//' /start-celerybeat
RUN chmod +x /start-celerybeat

COPY ./deployment/compose/testing/django/celery/flower/start /start-flower
RUN sed -i 's/\r//' /start-flower
RUN chmod +x /start-flower

WORKDIR /prod-app

ENTRYPOINT ["/entrypoint"]

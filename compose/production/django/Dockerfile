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



FROM python:3.6-stretch as GeoDjango

ENV PYTHONUNBUFFERED 1

RUN apt-get update \
    && apt-get install -y --no-install-recommends apt-utils \
        postgresql-client binutils libproj-dev gdal-bin \
    && rm -rf /var/lib/apt/lists/*

RUN addgroup --system django \
    && adduser --system --group django

# POSTGIS dependencies
ENV POSTGIS_VERSION 2.4.4
ENV POSTGIS_SHA256 0dff4902556ad45430e2b85dbe7e9baa758c6eb0bfd5ff6948f478beddd56b67

RUN mkdir /postGIS_Install && cd /postGIS_Install \
    && wget https://download.osgeo.org/geos/geos-3.7.1.tar.bz2 \
    && tar xjf geos-3.7.1.tar.bz2 \
    && cd geos-3.7.1 && ./configure && make && make install && cd .. \
    && wget https://download.osgeo.org/proj/proj-5.2.0.tar.gz \
    && wget https://download.osgeo.org/proj/proj-datumgrid-1.8.tar.gz \
    && tar xzf proj-5.2.0.tar.gz \
    && cd proj-5.2.0/nad \
    && tar xzf ../../proj-datumgrid-1.8.tar.gz \
    && cd .. \
    && ./configure \
    && make \
    && make install \
    && ldconfig \
    && cd .. \
    && wget https://download.osgeo.org/gdal/2.4.0/gdal-2.4.0.tar.gz \
    && tar xzf gdal-2.4.0.tar.gz \
    && cd gdal-2.4.0 \
    && ./configure \
    && make \
    && make install \
    && ldconfig \
    && cd ..
# END POSTGIS Changes

FROM GeoDjango
# Requirements are installed here to ensure they will be cached.
COPY ./requirements /requirements
RUN pip install --no-cache-dir -r /requirements/production.txt \
    && rm -rf /requirements

COPY ./compose/production/django/entrypoint /entrypoint
RUN sed -i 's/\r//' /entrypoint
RUN chmod +x /entrypoint
RUN chown django /entrypoint

COPY ./compose/production/django/start /start
RUN sed -i 's/\r//' /start
RUN chmod +x /start
RUN chown django /start

COPY ./compose/production/django/celery/worker/start /start-celeryworker
RUN sed -i 's/\r//' /start-celeryworker
RUN chmod +x /start-celeryworker
RUN chown django /start-celeryworker

COPY ./compose/production/django/celery/beat/start /start-celerybeat
RUN sed -i 's/\r//' /start-celerybeat
RUN chmod +x /start-celerybeat
RUN chown django /start-celerybeat

COPY ./compose/production/django/celery/flower/start /start-flower
RUN sed -i 's/\r//' /start-flower
RUN chmod +x /start-flower

COPY ./ /app
COPY --from=angular_build /ng-app/dist/*.js /app/crits_and_coffee/static/js/angular-app/
COPY --from=angular_build /ng-app/dist/*.css /app/crits_and_coffee/static/css/

RUN chown -R django /app

USER django

WORKDIR /app

ENTRYPOINT ["/entrypoint"]

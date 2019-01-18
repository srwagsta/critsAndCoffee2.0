FROM mdillon/postgis:10

RUN apt-get update &&\
    apt-get install -y binutils libproj-dev gdal-bin


COPY ./compose/production/postgres/maintenance /usr/local/bin/maintenance
RUN chmod +x /usr/local/bin/maintenance/*
RUN mv /usr/local/bin/maintenance/* /usr/local/bin \
    && rmdir /usr/local/bin/maintenance

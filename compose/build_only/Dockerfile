FROM python:3.6-stretch as GeoDjango

ENV PYTHONUNBUFFERED 1

RUN apt-get update \
    && apt-get install -y --no-install-recommends apt-utils \
        postgresql-client binutils libproj-dev gdal-bin \
    && rm -rf /var/lib/apt/lists/*

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

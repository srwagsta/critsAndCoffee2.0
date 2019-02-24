#!/usr/bin/env bash

docker-compose -f ../../compose/local.yml build --force-rm --pull

docker-compose -f ../../compose/local.yml push

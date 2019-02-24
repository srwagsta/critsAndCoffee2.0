#!/usr/bin/env bash

docker-compose -f ../../compose/test.yml build --force-rm --pull

docker-compose -f ../../compose/test.yml push

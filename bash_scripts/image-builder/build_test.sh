#!/usr/bin/env bash

cd ../../compose/

docker-compose -f ./test.yml pull

docker-compose -f ./test.yml build --force-rm --pull

docker-compose -f ./test.yml push

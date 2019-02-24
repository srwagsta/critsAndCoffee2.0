#!/usr/bin/env bash

docker-compose -f ../../compose/local.yml pull

docker-compose -f ../../compose/local.yml build

docker-compose -f ../../compose/local.yml up

#!/usr/bin/env bash
cd ../../compose

docker-compose -f ./production.yml pull

docker-compose -f ./production.yml up

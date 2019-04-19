#!/bin/bash

cd ../../compose

sudo docker-compose -f ./production.yml pull

sudo docker-compose -f ./production.yml up

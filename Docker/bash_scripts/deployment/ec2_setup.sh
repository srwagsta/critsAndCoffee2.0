#!/bin/bash

sudo apt-get update

sudo apt-get install -y \
nfs-common \
apt-transport-https \
ca-certificates \
curl \
gnupg-agent \
software-properties-common

curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -

sudo add-apt-repository \
"deb [arch=amd64] https://download.docker.com/linux/ubuntu \
   $(lsb_release -cs) \
stable"

sudo apt-get update

sudo apt-get install -y docker-ce docker-ce-cli containerd.io

sudo curl -L "https://github.com/docker/compose/releases/download/1.24.0/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose

sudo chmod +x /usr/local/bin/docker-compose

set -o allexport; source ../../.envs/.private/.production/.aws_ec2; set +o allexport

sudo docker login -u $DOCKER_HUB_USERNAME -p $DOCKER_HUB_PASSWORD

echo '** Server setup complete, launching containers ** '

cd ../../compose

sudo docker-compose -f ./production.deploy.yml pull

sudo docker-compose -f ./production.deploy.yml up
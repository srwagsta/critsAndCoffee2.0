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

set -o allexport; source .aws_ec2; set +o allexport

sudo docker plugin install  --grant-all-permissions rexray/efs \
    EFS_ACCESSKEY=$EFS_ACCESSKEY \
    EFS_SECRETKEY=$EFS_SECRETKEY \
    EFS_SECURITYGROUPS=$EFS_SECURITYGROUPS

sudo chmod +x ./live.sh

./live.sh
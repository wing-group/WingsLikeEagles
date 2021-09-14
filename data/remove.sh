#!/bin/sh
# this is only necessary if you didn't gracefully exit from start.sh
source ./env

CONTAINER=wle_db

docker stop $CONTAINER
docker rm $CONTAINER

docker network rm $WLE_NETWORK

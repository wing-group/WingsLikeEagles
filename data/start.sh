#!/bin/bash
# will start a postgresql db for middleware

# get pg vars
source ./env

# container name
CONTAINER=wle_db

if [[ $(docker network ls | grep ' '$WLE_NETWORK' ') ]]; then
    echo "network already exists, continuing..."
else
    echo "network doesn't exist. creating..."
    docker network create $WLE_NETWORK
fi

docker run \
    --name $CONTAINER \
    --network $WLE_NETWORK \
    -e POSTGRES_PASSWORD=$PG_PASSWORD \
    -e POSTGRES_USER=$PG_USERNAME \
    -e POSTGRES_DB=$PG_DB \
    -p 5432:5432 \
    -v ${PWD}/sql:/docker-entrypoint-initdb.d \
    --rm \
    postgres

#!/bin/bash
# will start a postgresql db for middleware

# get pg vars
source ./env

# container name
CONTAINER=wle_db

docker run \
    --name $CONTAINER \
    -e POSTGRES_PASSWORD=$PG_PASSWORD \
    -e POSTGRES_USER=$PG_USERNAME \
    -e POSTGRES_DB=$PG_DB \
    -p 5432:5432 \
    -v ${PWD}/sql:/docker-entrypoint-initdb.d \
    --rm \
    postgres

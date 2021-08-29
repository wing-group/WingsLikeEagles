# WingsLikeEagles

## Submodules
To pull all submodules: `git submodule update --init --recursive`

# Running the Code
There are 2 ways to run this: `standard` and `containered`
Note: Both require docker for the database.
## Standard
Only the database (postgres) is run in docker. Middleware and UI need to be run by you, the user.

### DB
1. Navigate to data/
2. Run `start.sh`. This will run the database in a process in your terminal. Ctrl-c will stop AND remove the container.
3. If the start script does not end gracefully with ctrl-c and the container is not removed, then you need to run `remove.sh`. Otherwise, you never need to run `remove.sh`.
### Middleware
1. Navigate to middleware/
2. Run `bundle install` so all gems are installed
3. Copy `config/local_env.yml.template` to `config/local_env.yml` and fill in appropriate fields. Reference `env` file in `data/` for reference.
4. Run `rails server -b 0.0.0.0`. 0.0.0.0 will save headaches for now when proxying requests from outside the middleware.

### UI
1. Navigate to ui/
2. Run `npm install` to install dependencies.
3. Run `npm run serve` to start the local ui server. (port 8080)
4. Run `npm run lint` to run the linter.

## Containered
### DB
See above.

### Middleware
Build the dockerfile in middleware using: `docker build . -t wle-api`. Then run `docker run --name wle-api -p 3000:3000 wle-api`

### UI
Build the dockerfile in UI using: `docker build . -t wle-ui`. Then run `docker run --name wle-ui -p 8080:8080 wle-ui`

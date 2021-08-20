# WingsLikeEagles

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
3. Run `rails server -p 3000` 

### UI
1. Navigate to ui/
2. Run `npm install` to install dependencies.
3. Run `npm run serve` to start the local ui server. (port 8080)
4. Run `npm run lint` to run the linter.

## Containered
`docker-compose up --build` ... so cory doesn't have to figure out why some gems don't install on arm

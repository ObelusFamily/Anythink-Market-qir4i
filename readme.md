# Welcome to the Anythink Market repo

To start the app use Docker. It will start both frontend and backend, including all the relevant dependencies, and the db.

Please find more info about each part in the relevant Readme file ([frontend](frontend/readme.md) and [backend](backend/README.md)).

## Development

When implementing a new feature or fixing a bug, please create a new pull request against `main` from a feature/bug branch and add `@vanessa-cooper` as reviewer.

## First setup

1. Install [Docker](https://docs.docker.com/get-docker/)
2. Verify that Docker is ready by running the following commands: `docker -v`
   and `docker-compose -v`, alternatively in newer versions of Docker the
   command is `docker compose version`
3. Run the container with `docker-compose up` or `docker compose up` from the
   project root directory
4. Check that the backend is running by going to http://localhost:3000/api/ping
5. Check that the frontend is connected to the backend by creating a new user on
   http://localhost:3001/register

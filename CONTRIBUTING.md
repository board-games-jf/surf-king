# Contributing

By participating to this project, you agree to abide our [code of
conduct](CODE_OF_CONDUCT.md).

**Table of Contents**

- [Stack](#stack)
- [Ports and endpoints](#ports-and-endpoints)
- [Setup your machine](#setup-your-machine)
  - [Using docker](#using-docker)
- [Run server](#run-server)
- [Publishing the harbor image](#publishing-the-harbor-image)
- [Create a commit](#create-a-commit)
- [Submit a pull request](#submit-a-pull-request)
- [Credits](#credits)

## Stack
- [boardgame.io](https://boardgame.io/)
- [Docker](https://www.docker.com/)
- [Next.js](https://nextjs.org/)
- [Node](https://nodejs.org/en/) 14
- [React](https://pt-br.reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)

## Ports and endpoints

| Port | Endpoint(s) | Description         |
| ---- | ----------- | ------------------- |
| 3000 | /           | Next.js server      |
| 8000 | /           | boardgame.io server |
| 8080 | /           | boardgame.io lobby  |

## Setup your machine

### Using docker

First time only:
```bash
docker-compose build
```

Run container:
```bash
docker-compose up -d
```

Enter on container:
```bash
docker-compose exec server bash
```

## Run server

Prepare environment:
```bash
yarn
```

Run server:
```bash
yarn run server
```

Run app:
```bash
yarn dev
```

## Create a commit

Commit messages should be well formatted, and to make that "standardized", we
are using Conventional Commits.

You can follow the documentation on
[their website](https://www.conventionalcommits.org).

## Submit a pull request

- go to a new branch `git checkout -b feat/my-feature`
- make your changes
- run tests and linter again
- Push your branch to [`surf-king`](https://github.com/board-games-jf/surf-king) repository
- Open PR against the main branch. 🏄

## Credits

### Contributors

Thank you to all the people who have already contributed to `surf-king`!

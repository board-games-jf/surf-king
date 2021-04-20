# Contributing

By participating to this project, you agree to abide our [code of
conduct](CODE_OF_CONDUCT.md).

**Table of Contents**

- [Stack](#stack)
- [Ports and endpoints](#ports-and-endpoints)
- [Setup your machine](#setup-your-machine)
  - [Using docker](#using-docker)
- [Generate database](#generate-database)
- [Run server](#run-server)
- [Visual Studio Code](#visual-studio-code)
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

| Port | Endpoint(s) | Description          |
| ----- | ----------- | ------------------- |
| 3000  | /           | Next.js server      |
| 8000  | /           | boardgame.io server |
| 8080  | /           | boardgame.io lobby  |
| 16543 | /           | pgAdmin dashboard   |

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

## Generate database

### Using docker

```bash
cat .\data\auth-schema.sql | docker-compose exec -i postgres psql -U surfking -d surfking
```

## Run server

Install dependencies:
```bash
yarn
```

Run app:
```bash
yarn dev
```

Run server:
```bash
yarn run server
```

## Visual Studio Code

If you are using VS Code, I strongly recommend you install the following plugin:
- [Remote - Containers](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers) - use a Docker container as a full-featured development environment.
- [ESLint plugin for VS Code](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) - which will enable you to view ESLint errors directly in your editor.

To unleash the true powers of ESLint and Prettier, we can configure VS Code so that it auto-corrects ESLint errors.
You should tell VS Code not to formatOnSave, but instead fix ESLint errors on save.
```json
// .vscode/settings.json
{
    "editor.formatOnSave": false,
    "editor.codeActionsOnSave": {
        "source.fixAll.eslint": true
    }
}
```

## Create a commit

Commit messages should be well formatted, and to make that "standardized", we
are using Conventional Commits.

You can follow the documentation on
[their website](https://www.conventionalcommits.org).

## Submit a pull request

- go to a new branch `git checkout -b feat/my-feature`
- make your changes
- run tests and linter again `yarn type-check && yarn lint .`
- Push your branch to [`surf-king`](https://github.com/board-games-jf/surf-king) repository
- Open PR against the main branch. 🏄

## Credits

### Contributors

Thank you to all the people who have already contributed to `surf-king`!

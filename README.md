# Dungeon Dweller

_Currently only have files on dev branch_

---

A desktop application to manage tabletop RPG games and related assets. Build with Go and Svelte to be as light and fast as possible.

Application will have a client dependency on Chrome/Chromium

---

Requires Go version 1.16+ for module management

Recommended to use NVM

---

## Getting Started _(dev)_

- Clone repo: `git clone https://github.com/bmw2621/dungeonDweller.git`
- Enter Project Directory: `cd dungeonDweller`
- Download Go dependencies: `go get ./...`
- Enter Views Directory: `cd views`
- Download JS dependencies: `yarn` or `npm install`
- Switch to Node LTS: `nvm use`
- Start frontend dev server: `yarn start` or `npm run start`
- Start backend dev server (separate terminal, from project root): `go run main.go`

## Node Scripts

| Command      | Action                                                                                                                                                            |
| ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| build        | Concurrently builds both player view and gamemaster view and places into respective build directories                                                             |
| dev          | Concurrently builds both views and serves on ports 5000 (gamemaster) and 5001 (player), watches for changes to files and rebuilds automatically for hot reloading |
| start        | Concurrently serves the respective build directories on ports 5000 (gamemaster) and 5001 (player)                                                                 |
| build:gm     | Builds gamemaster view                                                                                                                                            |
| dev:gm       | Builds and serves gamemaster view on port 5000 and watches files for hot reloading                                                                                |
| start:gm     | Serves current gamemaster view build on port 5000                                                                                                                 |
| build:player | Builds player view                                                                                                                                                |
| dev:player   | Builds and serves player view on port 5000 and watches files for hot reloading                                                                                    |
| start:player | Serves current player view build on port 5000                                                                                                                     |

## TODOs

_See Minimal Viable Product (MVP) project_

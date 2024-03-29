# mongodb-backend

A MongoDB backend to retrieve RoboCup Logistics League game reports. Used by the
official RoboCup Logistics League web frontend.

## Requirements

- [Download](https://nodejs.org/en/download/current) and install `Node.js`. For
  most Linux versions, preferably install Node.js via your package manager
  instead, see this command for Fedora:

  ```
  dnf install nodejs
  ```

- Install `yarn` with npm (which should come preinstalled with Node.js)

  ```
  npm install --g yarn
  ```

## Usage

- Install the dependencies

```
yarn install
```

- Start the backend

```
yarn run start
```

- Use the frontend (see
  [here](https://github.com/robocup-logistics/rcll-refbox-frontend)) to connect
  to the backend and review a game report. Note that newer versions of the
  frontend have dropped support for older game report versions.

## Bugs and Limitations

Report any issues you encounter on
[GitHub](https://github.com/robocup-logistics/mongodb-backend/issues).

# Welcome to Flight Service

## Project Setup

- clone the project from the repository to your local machine
- run `npm install` to install the dependencies
- create a `.env` file and add the following environment variables
  - `PORT` - the port on which the server will run
  - inside the `src/config folder` create a `config.json` file and add the following
    ```json
    {
    "development": {
    "username": "root",
    "password": "your db_login password",
    "database": "Flight_Search",
    "host": "127.0.0.1",
    "dialect": "mysql"
    },
    }
    ```

- once you have cloned the project run the following command to create the database
  ```bash
  npx sequelize db:create
  ```

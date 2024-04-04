# Welcome to Flight Service
 This project is made using microservices architecture has many services like
 Flight service, AirplaneTicketBookingService,ApiGateway,FlightRemainderService,UserAuthService
 


 - [Design Doc](https://github.com/hacanand/Flight_Search/blob/master/Design_Doc.md)
# Other Services Link
- [AirplaneTicketBookingService](https://github.com/hacanand/AirplaneTicketBookingService)
- [FlightService](https://github.com/hacanand/Flight_Search)
- [FlightRemainderService](https://github.com/hacanand/FlightRemainderService)
- [ApiGateway](https://github.com/hacanand/ApiGateway)
- [UserAuthService](https://github.com/hacanand/UserAuthService)

## Project Setup

- clone the project from the repository to your local machine
- run `npm install` to install the dependencies
- create a `.env` file and add the as needed environment variables
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
- then run the following command to create the tables
- 
 ```bash
  npx sequelize db:migrate
  ```

## Tables 
- City->id name createdAt updatedAt
- airpot ->id name cityId createdAt updatedAt
- relationship ->city has many airport belong to city

- AUTH MICROSERVICE

S1. npm init 
    npm install

S2. create .env file with port number

S3. In src/config/config.json write- 
     ```
     {
      "development": {
      "username": <MYSQL USENAME>,
      "password": <YOUR MYSQL PASSWORD>,
      "database": <YOUR DATABASE NAME>,
      "host": "127.0.0.1",
      "dialect": "mysql"
     }
     }
     ```
S4.   npm squelize db:create   
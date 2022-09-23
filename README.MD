# Getting started

To get the Node server running locally:

- Clone this repo
- `npm install` to install all required dependencies
-  Create a .env file in the root of your project backend based in .env.example
- `npm run dev` to start the local server
- `npx sequelize-cli db:seed:all` to run Seeder sequelize

# Code Overview

## Dependencies

- [expressjs](https://github.com/expressjs/express) - The server for handling and routing HTTP requests
- [jsonwebtoken](https://github.com/auth0/node-jsonwebtoken) - For generating JWTs used by authentication
- [sequelize](https://github.com/sequelize/sequelize) - ORM tool for modeling and mapping data to Node.js 
- [sqlite3](https://github.com/TryGhost/node-sqlite3) -  SQLite3 bindings for Node.js
- [bcrypt](https://github.com/kelektiv/node.bcrypt.js) -  Library to help generate hash passwords
- [body-parser](https://github.com/expressjs/body-parser) - Node.js body parsing middleware
- [dotenv](https://github.com/motdotla/dotenv) - Module for load environment variables from a .env file into process.env

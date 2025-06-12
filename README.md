## ⚙️ Graph Rest API Nest  
Backend project developed with NestJS providing both RESTful and GraphQL API capabilities. It connects to a PostgreSQL database to manage and retrieve data efficiently. The project offers flexible ways to interact with the same data source.

### Features  
- **REST API**  
  Fully functional RESTful endpoints to create, read, update, and delete resources.

- **GraphQL API**  
  GraphQL endpoints designed for flexible and efficient data querying.

- **PostgreSQL Database**  
  Robust data storage with PostgreSQL, optimized for scalability and complex queries.

- **Authentication and Authorization**  
  Basic authentication implemented to secure API access.

## Technologies Used
### Backend & APIs
- [NestJS](https://nestjs.com/) `v10.0.0`
- [TypeScript](https://www.typescriptlang.org/) `v5.0` (implicit with NestJS 10)
- REST API (via [@nestjs/common](https://docs.nestjs.com/controllers))
- [GraphQL API](https://docs.nestjs.com/graphql/quick-start) `v12.2.1` (via [@nestjs/graphql](https://github.com/nestjs/graphql))
- [PostgreSQL](https://www.postgresql.org/) `v8.13.1` (package [pg](https://github.com/brianc/node-postgres))

## Setup
1. Install the dependencies:

   ```bash
   npm install

2. Configure the PostgreSQL database by setting up the necessary environment variables in the .env file.

## Run
To run the application in development mode, execute the following command:

   ```bash
   # development
   $ npm run start
  
   # watch mode
   $ npm run start:dev
  
   # production mode
   $ npm run start:prod
   ```
This will start the server, and you can access the REST API on http://localhost:3000 and the GraphQL Playground on http://localhost:3000/graphql.

## Run tests
   ```bash
   # unit tests
   $ npm run test
  
   # e2e tests
   $ npm run test:e2e
  
   # test coverage
   $ npm run test:cov
   ```

## Contributions
Contributions are welcome! If you want to improve the project, please create a fork and submit a pull request.

## Contact
For any questions or suggestions, feel free to contact me at [ezioeg@gmail.com].

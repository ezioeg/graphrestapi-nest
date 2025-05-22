# Graph Rest API Nest
Graph Rest API Nest is a backend project built using NestJS to provide both RESTful API and GraphQL API capabilities. The application connects to a PostgreSQL database to manage and retrieve data. This project aims to offer a flexible API with multiple ways to interact with the same data source.

## Features
- **REST API**: Fully functional RESTful endpoints to manage resources.
- **GraphQL API**: GraphQL endpoints for efficient querying and data fetching.
- **PostgreSQL Database**: Data storage managed via PostgreSQL for easy scalability and query optimization.
- **Authentication and Authorization**: Includes basic authentication for secure access.

## Technologies Used
### Backend & APIs
- [NestJS](https://nestjs.com/) `v10.0.0`
- [TypeScript](https://www.typescriptlang.org/) `v5.0` (implícito con NestJS 10)
- REST API (a través de [@nestjs/common](https://docs.nestjs.com/controllers))
- [GraphQL API](https://docs.nestjs.com/graphql/quick-start) `v12.2.1` (a través de [@nestjs/graphql](https://github.com/nestjs/graphql))
- [PostgreSQL](https://www.postgresql.org/) `v8.13.1` (paquete [pg](https://github.com/brianc/node-postgres))

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

<div>
<h1 align="center">
  Assets API
</h1>
</div>

<div align="center">

<img src="https://img.shields.io/badge/Typescript-5.3.3-3198c6">

<img src="https://img.shields.io/badge/NodeJS-20.17.0-026e00">

<img src="https://img.shields.io/badge/NestJS-10.4.5-ea2845">

<img src="https://img.shields.io/badge/GraphQL-16.8.1-e10098">

<img src="https://img.shields.io/badge/PostgreSQL-16.4.0-0069d9">

</div>

# Overview

An API for registering user assets, built with Nest.js, GraphQL, TypeScript, PostgreSQL.

# Installation

1. Clone the repository:

```bash
git clone https://github.com/wendelsantosd/assets-api.git
```

2. Install the dependencies:

```bash
yarn
```

3. Create a `.env` file from the `.env.example` file.

4. Check if your PostgreSQL database is configured. There is a `docker-compose.yml` file that quickly sets up a database.

5. Synchronize the database with the application:

```bash
yarn init:db
```

6. Start the application.

```bash
yarn start:dev
```

# Application Running

```bash
  http://localhost:3333/graphql
```

# Queries and Mutations Examples

1. Create an Asset

```bash
    mutation {
        createAsset(data: {
            name: "Mouse",
            value: 120.90,
            date: "2024-09-06"
        }){
            id,
            name,
            value,
            date
        }
    }
```

2. Update an Asset

```bash
    mutation {
        updateAsset(data: {
            id: "b7b587bf-e8ca-4b62-a110-5a0873677e5c",
            name: "Teclado",
            value: 12.85,
            date: "2024-09-06"
        }){
            id,
            name,
            value,
            date
        }
    }
```

3. Get Assets

```bash
    query {
        stations {
            id
            name
            value
            date
        }
    }
```

4. Get an Asset

```bash
    query {
        asset(id: "246d65de-678e-4191-ad99-b9f82782f393") {
            id
            name
            value
            date
        }
    }
```

5. Delete an Asset

```bash
    mutation {
        deleteAsset(id: "b7b587bf-e8ca-4b62-a110-5a0873677e5c")
    }
```

# Contact

<p style="font-size: 18px;">
Wendel Santos, 2024.
</p>
<p style="font-size: 18px;">
wendelwcsantos@gmail.com
</p>

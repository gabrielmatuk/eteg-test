# ETEG Backend API

This API complents a full CRUD for a user entity. Inserting on a specific table they name, email, CPF, color and a observation field where can be null.

### API Structure

| HTTP METHOD | POST        | GET         | PUT         | DELETE      |
| ----------- | ----------- | ----------- | ----------- | ----------- |
| CRUD OP     | CREATE      | READ        | UPDATE      | DELETE      |
| /users      | Ok (201)    | Error (200) | Error (200) | Error (204) |


## API Path
<b>http://localhost:3000/api/users</b>

## Getting Started


### Requirements

- NodeJS (16/18 recommended)
- Yarn
- Docker
- A Postgres instance (can be local or remote)

### Development

Start Docker in your machine.

```bash
sudo service docker start
```

or if you are using WSL

```bash
sudo /etc/init.d/docker start
```

To use the recommend version of NodeJS, use the following command:
```bash
nvm use
```
After that, use the following commands:

To download the dependencies:

```bash
yarn 
```
To create a local database:

```bash
yarn db
```
To run the migrations:

```bash
yarn migrate
```

For seed the DB for tests you can use:
```
yarn seed
```

After all, you can test the API and start the server:


```bash
yarn test
```

```bash
yarn dev
```

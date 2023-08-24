# ETEG Fullstack Challenge 

This application complents a full CRUD for a user entity, one form how insert on DB infos.

## Technologies used
- NodeJS
- ReactJS
- PostgreSQL
- Docker
- Prisma
- Jest
- Typescript
## Getting Started

### Requirements

- NodeJS (16/18 recommended)
- Yarn
- Docker

### Development

Start Docker in your machine.

```bash
sudo service docker start
```

or if you are using WSL

```bash
sudo /etc/init.d/docker start
```
Run the containers:
```bash
docker compose up --build -d
```
or if you want see then:
```bash	
docker compose up --build
```

<b>The postgres container will be running on port 5432, the API container will be running on port 3000 and the APP container will be running on port 5173.

API container path: http://localhost:3000/api/users

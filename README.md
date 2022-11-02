# Api Typescript on Typeorm

- [x] Database - MySql
- [x] Nodemon
- [x] Cors
- [x] Docker-compose
- [x] Makefile   

## How to install?

- install docker-compose from 
 ```bash
  sudo curl -L "https://github.com/docker/compose/releases/download/1.29.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
 ```
 
 ```bash
  sudo chmod +x /usr/local/bin/docker-compose
 ```
 ```bash
  docker-compose --version
```
- install typeorm
```bash
  npm i -g typeorm
```
- install modules
```bash
  npm install
```

## Config Environment Variables

- Copy and paste .env.example to change name for .env
```javascript
  DB_HOST=localhost
  DB_USER=test
  DB_PASSWORD=test
  DB_PORT=3308 //mysql port
  DB_NAME=db_name //your database name


  FRONTEND_ORIGIN="http://localhost:19006" //origin from your frontend
```

## How to run?

- Start docker-compose
```bash
  docker-compose-up
```
- Start project
```bash
  npm run dev
```

- Don't forget to start docker-compose and the project in two different bash's

# hiptudio

Configurar o container do mysql no docker:

```docker run --name mysql-container -e MYSQL_ROOT_PASSWORD= -e MYSQL_ALLOW_EMPTY_PASSWORD=yes -p 3306:3306 -d mysql```

Para configurar o Prisma:

```npx prisma migrate dev```

`npx prisma generate`

Para compilar o projeto:

`npm install`

`npm run start`

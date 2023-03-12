# 🚀 ***PassWizard API*** 🧙‍♂️
### 🇬🇧 English | 🇪🇸 [Español](./docs/LEEME.md)
PassWizard API is a TypeScript REST API built with Node.js and Express.js. The purpose of this API is to serve as the server for the ***PassWizard*** client application, which can be found ***[here](https://github.com/Juan-Jose-Hidalgo/PassWizard)***. This API provides different endpoints for PassWizard to manage users and passwords, including CRUD operations for both users and passwords generated by users.

## 🗄️ ***Database***
The application uses PostgreSQL as its database management system, version 14.7. If you wish to use a different database management system, you can modify the src/database/database.connection.ts file and configure the dialectOptions object to match the options of your desired system. For example, to use MySQL:
```typescript
export const sequelize = new Sequelize(`mysql://${user}:${pass}@${host}:${port}/${db}`, {
  dialect: 'mysql',
  logging: false
});
```

## 🌐 ***Environment Variables***
To properly run the application, it is necessary to declare the following environment variables in a .env file in the project root:

### ***Variables for database connection***
- PASSWORDDB: database password.
- PGDATABASE: database name.
- PGHOST: database host name.
- PGPASSWORD: database user password.
- PGPORT: PostgreSQL running port.
- PGUSER: database user name.
### ***Variables for server configuration***
- PORT: the port on which the application will run.
- JWT_SECRET: secret key for signing and verifying JWT tokens.
  
## 🌐 ***Deploying to Railway***
If you want to use this application online, it is possible to deploy it to Railway by following these steps:
1. Create an account on Railway.
2. Create a new project on Railway.
3. Add a PostgreSQL database to your project.
4. Add a Node.js server to your project.
5. Declare the necessary environment variables for the application (see previous section).
6. Configure ports and server type.
## 🚀 ***Local Execution***
If you prefer to run the application locally, you can do so by following these steps:
1. Clone this repository on your local machine.
2. Run npm install to install dependencies.
3. Create a PostgreSQL database on your local machine and make sure you have the necessary environment variables (see previous section).
4. Run npm run dev to start the server in development mode.
5. If you want to run the server in production mode, you must run npm run build and then npm start.
   
## 📜 ***Scripts***
The following scripts are available in this project:
- dev: Runs the server in development mode using nodemon.
- build: Compiles TypeScript files to JavaScript files in the "dist" folder.
- start: Runs the server in production mode using the compiled files in the "dist" folder.

## ***Author Information*** 👨‍💻
#### 🙋‍♂️ Name: Juan José Hidalgo
#### 🐙 GitHub: https://github.com/Juan-Jose-Hidalgo
#### 💼 Visit my profile on [LinkedIn](https://www.linkedin.com/in/juan-jos%C3%A9-hidalgo-ya%C3%B1ez-854698b4/)
#### 📨 Email: juanhidalgoyanez@gmail.com
<br></br>
## 📝 ***License***
This project is licensed under the MIT License. See the [LICENSE](./docs/LICENSE.md) file for more details.
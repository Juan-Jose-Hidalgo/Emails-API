# 📧 **Email-Api**
### 🇬🇧 English | 🇪🇸 [Español](docs/LEEME.md)
This application is a Rest API developed in Node.js and Express.js that aims to receive data from a request and send an email to a specific email address using the Nodemailer library.

##  📝 Prerequisites
Node.js v18.13.0 or higher.
## ⬇️ Installation
1. Download or clone the repository.
2. Open the project folder in the terminal.
3. Run the command npm install to install all dependencies.
## 📤 Usage
1. Run the command npm start to start the application on the port specified in the .env file.
2. Send a POST request to the address http://localhost:port/contact/portfolio-form with the following data in the request body:

```typescript
{
  "name": "Sender's name",
  "email": "Sender's email",
  "subject": "Email subject",
  "message": "Email message body"
}
```
The application will send an email with the information provided to the email address specified in the .env file.

## ⚙️ Configuration
Before running the application, you must configure the following environment variables in the .env file:
- PORT: The port on which the application will run.
- TRANSPORT_USER: The user of the email service.
- TRANSPORT_PASS: The password of the email service.
- RECIPIENT_EMAIL: The email address to which you will send your message.
  
In addition, if you want to change your email service, you must modify your configuration parameters in your sendEmail helper, located in your src/helpers/email.ts file.
## ***Datos del autor*** 👨‍💻
#### 🙋‍♂️ Name: Juan José Hidalgo
#### 🐙 GitHub: https://github.com/Juan-Jose-Hidalgo
#### 💼 Visit my profile on [LinkedIn](https://www.linkedin.com/in/juan-jos%C3%A9-hidalgo-ya%C3%B1ez-854698b4/)
#### 📨 Email: contacto@juan-hidalgo.es
---
## 📝 ***License***
This project is licensed under the MIT License. See the file [LICENSE.md](./docs/LICENSE.md) for more details.
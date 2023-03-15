# 📧 **Email-Api**
### 🇬🇧 [English](../README.md) | 🇪🇸 Español
Esta aplicación es una API Rest desarrollada en Node.js y Express.js que tiene como objetivo recibir datos de una solicitud y enviar un correo electrónico a una dirección de correo electrónico específica utilizando la librería Nodemailer.

##  📝 Requisitos previos
Node.js v18.13.0 o superior.
## ⬇️ Instalación
1. Descargar o clonar el repositorio.
2. Abrir la carpeta del proyecto en la terminal.
3. Ejecutar el comando npm install para instalar todas las dependencias.
## 📤 Uso
1. Ejecutar el comando npm start para iniciar la aplicación en el puerto especificado en el archivo .env.

2. Enviar una solicitud POST a la dirección http://localhost:puerto/contact/portfolio-form con los siguientes datos en el cuerpo de la solicitud:

```typescript
{
  "name": "Nombre del remitente",
  "email": "Correo electrónico del remitente",
  "subject": "Asunto del correo electrónico",
  "message": "Cuerpo del mensaje del correo electrónico"
}
```
La aplicación enviará un correo electrónico con la información proporcionada a la dirección de correo electrónico especificada en el archivo .env.

## ⚙️ Configuración
Antes de ejecutar la aplicación, se deben configurar las siguientes variables de entorno en el archivo .env:

- PORT: El puerto en el que se ejecutará la aplicación.
- TRANSPORT_USER: El usuario del servicio de correo electrónico.
- TRANSPORT_PASS: La contraseña del servicio de correo electrónico.
- RECIPIENT_EMAIL: La dirección de correo electrónico a la que se enviará el mensaje.
  
Además, si se desea cambiar el servicio de correo electrónico utilizado, se deberán modificar los parámetros de configuración en el helper sendEmail, ubicado en el archivo src/helpers/email.ts.
## ***Datos del autor*** 👨‍💻
#### 🙋‍♂️ Name: Juan José Hidalgo
#### 🐙 GitHub: https://github.com/Juan-Jose-Hidalgo
#### 💼 Visit my profile on [LinkedIn](https://www.linkedin.com/in/juan-jos%C3%A9-hidalgo-ya%C3%B1ez-854698b4/)
#### 📨 Email: contacto@juan-hidalgo.es
---
## 📝 ***Licencia***
Este proyecto está licenciado bajo la Licencia MIT. Consulta el archivo [LICENCIA](./LICENCIA.md) para más detalles.
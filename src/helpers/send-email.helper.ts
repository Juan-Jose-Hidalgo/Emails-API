import nodemailer from 'nodemailer';

export const sendEmail = async (name: string, email: string, subject: string, message: string) => {

    const user = `${process.env.TRANSPORT_USER}`;
    const pass = `${process.env.TRANSPORT_PASS}`;

    console.log(user, pass)

    try {
        const transporter: any = nodemailer.createTransport({
            host: 'smtp.ionos.es',
            port: 587,
            auth: { user, pass },
        });

        const mailOptions = {
            from: email,
            to: 'contacto@juan-hidalgo.es',
            subject,
            text: `Mensaje de ${name}: ${message}`
        };

        const info = await transporter.sendMail(mailOptions);
        console.log('Correo electrónico enviado: ' + info.response);
        return info;

    } catch (error) {
        console.log(error);
        throw error;
    }
}



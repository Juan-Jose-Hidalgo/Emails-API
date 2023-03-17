import nodemailer, { Transporter } from 'nodemailer';

const transporterAuth = {
    user: process.env.TRANSPORT_USER,
    pass: process.env.TRANSPORT_PASS,
}

const recipientEmail = process.env.RECIPIENT_EMAIL;

/**
 * Sends an email using nodemailer library.
 *
 * @remarks
 * This function takes in the necessary parameters to send an email.
 *
 * @param name - The name of the sender.
 * @param email - The email of the sender.
 * @param subject - The subject of the email.
 * @param message - The message of the email.
 *
 * @returns A promise that resolves with the information about the sent email.
 *
 * @throws An error if something goes wrong during the process of sending the email.
 *
 * @beta
 */
export const sendEmail = async (name: string, email: string, subject: string, message: string): Promise<any> => {
    // Create the transporter with the required configuration.
    const transporter: Transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: transporterAuth,
    });

    // Create the mail options object with the required fields.
    const mailOptions = {
        // from: email,
        to: recipientEmail,
        subject,
        text: `
        Nombre: ${name}
        Email: ${email}

        ${message}`
    };

    try {
        // Send the email using the transporter and mail options objects.
        const info = await transporter.sendMail(mailOptions);
        return info;

    } catch (error) {
        // If something goes wrong during the sending process, log the error and throw it.
        const errorMessage = 'Ha habido un error al enviar el correo electrónico';
        console.error(error);
        throw new Error(errorMessage);
    }
}



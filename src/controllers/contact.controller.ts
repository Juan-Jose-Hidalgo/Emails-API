import { Request, Response } from 'express';
import { sendEmail } from '../helpers/send-email.helper';


class ContactController {

    async handleContactForm(req: Request, res: Response) {
        try {
            const { name, email, subject, message } = req.body;

            if (!name || !email || !message) {
                throw new Error('Todos los campos son requeridos');
            }

            await sendEmail(name, email, subject, message);

            res.status(200).json({ message: 'Mensaje enviado correctamente' });
        } catch (error) {
            console.log(error);
            res.status(500).json({ error: 'Error al procesar la solicitud' });
        }
    }
}

const contactController = new ContactController();
export default contactController;
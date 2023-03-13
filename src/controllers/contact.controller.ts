import { Request, Response } from 'express';
import { sendEmail } from '../helpers/send-email.helper';


class ContactController {
    /**
     * Handles the contact form request and sends the email.
     * 
     * @param req The request object containing the form data.
     * @param res The response object to send back the result.
     * @returns A JSON object with the message or an error message.
     */
    async handleContactForm(req: Request, res: Response): Promise<void> {
        const { name, email, subject, message } = req.body;

        if (!name || !email || !message) {
            res.status(400).json({ error: 'All fields are required' });
            return;
        }

        try {
            await sendEmail(name, email, subject, message);
            res.status(200).json({ message: 'Message sent successfully' });

        } catch (error) {
            res.status(500).json({ error: 'Internal server error' });
        }
    }
}

const contactController = new ContactController();
export default contactController;
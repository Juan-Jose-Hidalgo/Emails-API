import { Router } from 'express';
import contactController from '../controllers/contact.controller';

const router = Router();

router.post('/portfolio-form', contactController.handleContactForm);

export { router }
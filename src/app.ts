import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

// Import routes dynamically.
import { router } from './routes';

const app = express();

//* MIDDLEWARES

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: false,
    optionsSuccessStatus: 204
}));
app.use(morgan('dev'));
app.use(router); //Dinamic routes.

export default app;
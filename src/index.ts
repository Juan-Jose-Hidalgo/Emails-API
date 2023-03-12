import 'dotenv/config';
import app from './app';

const PORT = process.env.PORT || 3002;
const main = async () => {
    try {
        app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));
    } catch (error) {
        console.error('Error en la conexión:', error);
    }
}

main();

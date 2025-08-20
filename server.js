import express from 'express';
import dotenv from 'dotenv';
import router from './Router/endpoints.js';
import { connectDB } from './db/connectDB.js';

dotenv.config();
const server = express();

server.use(express.json());
server.use('/', router);

(async () => {
    try {
        await connectDB(process.env.MONGODB_URI);
        server.listen(process.env.PORT, () => {
            console.log(`you listen to port ${process.env.PORT}`);
        });
    } catch (e) {
        console.error('Failed to start server', e);
        process.exit(1);
    }
})();




// מה צריך כדי להתממש לשרת mongo db atlas

// env V
// connectDB V
// model Schema V

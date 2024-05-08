import express from 'express';


const app = express();

app.use(express.json());

import router from './routes/car.routes.js';

app.use('/car', router)


export default app;
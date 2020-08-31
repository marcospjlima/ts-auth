import "reflect-metadata";
import express from 'express';

import * as dotenv from 'dotenv';

import './database/connect';
import routes from './routes';

dotenv.config({ path: __dirname+'/.env' });

const app = express();

app.use(express.json());
app.use(routes);

app.listen(3000, () => console.log('Server started at http://localhost:3000'));

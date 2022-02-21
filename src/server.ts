import express from 'express';
import 'reflect-metadata';
import './database';
import { router } from './routes';

const app = express();

app.use(express.json());

app.use(router);

const PORT = 3000;
app.listen(PORT, () => {
  console.log('Server is running');
});

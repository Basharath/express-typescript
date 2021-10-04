import express, { json, urlencoded } from 'express';

const app = express();

app.use(json());
app.use(urlencoded({ extended: false }));

app.get('/', (req, res) => res.send('Hi, welcome to express typescript.'));

export default app;

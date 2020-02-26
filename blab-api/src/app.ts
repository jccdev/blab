import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import users from './routes/users';

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors({ origin: "http://localhost:8080", methods: "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS"}))

app.use(users);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

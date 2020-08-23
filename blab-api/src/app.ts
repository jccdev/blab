import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import users from './routes/users';
import auth from './routes/auth';
import channels from './routes/channels';

const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(cors({ origin: "http://localhost:8080", methods: "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS"}))

app.use(users);
app.use(auth);
app.use(channels)

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

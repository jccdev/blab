import express from 'express';

const baseRoute = "/users"

const router = express.Router();

router.get(`${baseRoute}/`, (req, res) => res.send('Hello World!'));

export default router;
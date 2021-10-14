import express from 'express';
import { Router, Response, Request } from 'express';

const app = express();
const route = Router();

app.use(express.json());

route.get('/', (req:Request, res: Response) => {
    res.json({message: 'ola'})
})
import express from 'express';
import cookie from 'cookie-parser';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());
app.use(cookie());

export default app;
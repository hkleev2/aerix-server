import express from 'express';
import { passport, initializeRequestUser } from './passport';
import { corporationRouter, sampleRouter } from '../../api/route';

const app: express.Application = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(passport.initialize());
app.use(initializeRequestUser);

app.use('/sample', sampleRouter);
app.use('/corporation', corporationRouter);

app.get('/health-check', (req, res) => {
  res.status(200);
});

export { app };

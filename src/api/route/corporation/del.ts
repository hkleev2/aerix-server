import { RequestHandler } from 'express';

const validate: RequestHandler = (req, res, next) => {
  next();
};

const deleteSample: RequestHandler = (req, res) => {
  res.status(204).send();
};

export default [validate, deleteSample];

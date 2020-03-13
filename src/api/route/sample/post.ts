import { RequestHandler } from 'express';

const validate: RequestHandler = (req, res, next) => {
  next();
};

const createSample: RequestHandler = (req, res) => {
  res.json({
    name: 'createdSample',
  });
};

export default [validate, createSample];

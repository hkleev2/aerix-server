import { RequestHandler } from 'express';

const validate: RequestHandler = (req, res, next) => {
  next();
};

const getSample: RequestHandler = (req, res) => {
  res.json({
    name: 'sample',
  });
};

export default [validate, getSample];

import { RequestHandler } from 'express';

const validate: RequestHandler = (req, res, next) => {
  next();
};

const getSamples: RequestHandler = (req, res) => {
  res.json([
    {
      name: 'sample1',
    },
    {
      name: 'sample2',
    },
  ]);
};

export default [validate, getSamples];

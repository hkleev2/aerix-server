import { RequestHandler } from 'express';

const validate: RequestHandler = (req, res, next) => {
  next();
};

const updateSample: RequestHandler = (req, res) => {
  res.json({
    name: 'updatedSample',
  });
};

export default [validate, updateSample];

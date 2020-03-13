import createError from 'http-errors';
import { getRepository } from 'typeorm';
import { RequestHandler } from 'express';
import { Corporation } from '../../../entity';

const validate: RequestHandler = (req, res, next) => {
  // eslint-disable-next-line no-debugger
  debugger;
  if (!req.body.name) {
    return next(new createError[400]('이름은 필수 값입니다.'));
  }

  next();
};

const createSample: RequestHandler = async (req, res) => {
  const corporation = new Corporation();
  corporation.name = req.body.name;

  const createdCorporation = await getRepository(Corporation).save(corporation);

  res.json(createdCorporation);
};

export default [validate, createSample];

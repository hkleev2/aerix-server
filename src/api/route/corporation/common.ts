import { RequestHandler } from 'express';
import createHttpError from 'http-errors';

export const commonSampleMiddleware: RequestHandler = (req, res, next) => {
  if (!req.user) {
    next(new createHttpError.Unauthorized('리소스에 대한 권한이 없습니다.'));
  }
};

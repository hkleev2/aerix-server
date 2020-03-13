import { RequestHandler } from 'express';
import passport from 'passport';

import { localStrategy } from './local';
import { jwtStrategy } from './jwt';
import { User } from '../../../entity';
passport.use(localStrategy);
passport.use(jwtStrategy);

export { passport };

export const initializeRequestUser: RequestHandler = (req, res, next) => {
  passport.authenticate('jwt', { session: false }, (error: unknown, user: User) => {
    if (user) {
      req.user = user;
    }
    next();
  })(req, res, next);
};

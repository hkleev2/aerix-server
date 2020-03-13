import { Strategy as JwtStrategy, ExtractJwt, VerifiedCallback } from 'passport-jwt';
import { getRepository } from 'typeorm';

import { User } from '../../../entity';

export const jwtStrategy = new JwtStrategy(
  {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: '123123', // TODO ENV
  },
  async (payload, done: VerifiedCallback): Promise<void> => {
    try {
      const user = await getRepository(User).findOne({ id: payload.id });

      if (user !== null) {
        return done(null, user);
      } else {
        return done(null, false);
      }
    } catch (error) {
      return done(error, false);
    }
  }
);

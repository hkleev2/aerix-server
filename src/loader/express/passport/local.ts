import { Strategy as LocalStrategy } from 'passport-local';
import { getRepository } from 'typeorm';

import { User } from '../../../entity';

export const localStrategy = new LocalStrategy(
  {
    usernameField: 'userId',
    passwordField: 'password',
  },
  async (username, password, callback) => {
    let user;

    try {
      user = await getRepository(User).findOne({
        where: {
          userId: username,
        },
      });
      // TODO password matching
    } catch (err) {
      return callback(err, false);
    }

    return callback(null, user || false);
  }
);

import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { ConsoleLogger, Injectable } from '@nestjs/common';
import { Config } from '../helpers/config.helper';


@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: Config.get('SECRET_KEY'),

    });
  }

  async validate(payload: any) {
    
    return { userId: payload.UserID };
  }
}
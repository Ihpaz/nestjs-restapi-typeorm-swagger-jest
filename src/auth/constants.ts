import { Config } from "../helpers/config.helper";

export const jwtConstants = {
    secret: Config.get('SECRET_KEY'),
    expiresIn: Config.get('EXPIRED') ,
  };
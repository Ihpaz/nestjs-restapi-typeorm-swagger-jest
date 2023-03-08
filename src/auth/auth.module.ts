import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';
import { Config } from '../helpers/config.helper';
import { AuthController } from './auth.controller';

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: Config.get('SECRET_KEY'),
      signOptions: { expiresIn: Config.get('EXPIRED') },
    }),
  ],
  providers: [AuthService,JwtStrategy],
  exports: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}
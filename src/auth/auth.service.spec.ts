import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { Test, TestingModule } from '@nestjs/testing';
import { Config } from '../helpers/config.helper';
import { AuthService } from './auth.service';
import { AuthDTO } from './dto/auth.dto';

describe('AuthService', () => {
  let service: AuthService;
  let dto:AuthDTO={
    Email:'yesyasrps@gmail.com',
    Password:'Abc123456'
  }

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        PassportModule,
        JwtModule.register({
          secret: Config.get('SECRET_KEY'),
          signOptions: { expiresIn: Config.get('EXPIRED') },
        }),
      ],
      providers: [AuthService],
    }).compile();

    service = module.get<AuthService>(AuthService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should be get token',async () => {
    const data=await service.generateToken(dto);
    expect(data).toHaveProperty('access_token');
  });


});

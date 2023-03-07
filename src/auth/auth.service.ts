import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { AuthDTO } from './dto/auth.dto';
import { JwtService } from '@nestjs/jwt';



@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService
    ) {}

  async validateUser(dto: AuthDTO){
    // if (user && user.UserPwd === dto.UserPwd) {
    //   return user
    // }

    return false;
  }

  async login(dto: AuthDTO) {
   
      const validate:any = await this.validateUser(dto);

      if(validate){
        const payload = { Email: dto.Email, Role: dto.Role };
       
        return {
          response:"Success",
          status:200,
          access_token: this.jwtService.sign(payload),
        };

      }else{
        return new HttpException('Forbidden', HttpStatus.FORBIDDEN);
      }
   
    
  }
}
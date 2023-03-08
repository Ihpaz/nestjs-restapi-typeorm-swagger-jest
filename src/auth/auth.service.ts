import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { AuthDTO } from './dto/auth.dto';
import { JwtService } from '@nestjs/jwt';



@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService
    ) {}

  async validateUser(dto: AuthDTO){

    //only for test 
    if ( dto.Password === dto.Password) {
      return true
    }

    return false;
  }

  async generateToken(dto: AuthDTO) {
   
      const validate:any = await this.validateUser(dto);

      if(validate){
        const payload = { Email: dto.Email };
       
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
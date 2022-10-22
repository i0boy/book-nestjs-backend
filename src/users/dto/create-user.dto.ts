import { Transform, TransformFnParams } from 'class-transformer';
import {
  IsEmail,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';
import { NotIn } from 'src/config/NotIn';
const trim = (params: TransformFnParams) => params.value.trim();
export class CreateUserDto {
  // 공백 제거
  @Transform(trim)
  @IsString()
  @MinLength(2)
  @MaxLength(30)
  readonly name: string;
  @Transform(trim)
  @IsString()
  @IsEmail()
  @MaxLength(60)
  readonly email: string;
  /**
   * 사용자 패스워드는
   * 영문대소문자와 숫자 또는 특수문자(!, @, #, $, %, ^, &, *, (, ))로 이루어진
   * 8자 이상 30자 이하의 문자열이어야 한다.
   */
  // @Transform(({ value, obj }) => {
  //   if (obj.password.includes(value.trim())) {
  //     throw new BadRequestException(
  //       'password는 name과 같은 문자열을 포함할 수 없습니다.',
  //     );
  //   }
  //   return value.trim();
  // })
  @NotIn('password', {
    message: 'password는 name과 같은 문자열을 포함할 수 없습니다.',
  })
  @IsString()
  @Matches(/^[A-Za-z\d!@#$%^&*()]{8,30}$/)
  readonly password: string;
}

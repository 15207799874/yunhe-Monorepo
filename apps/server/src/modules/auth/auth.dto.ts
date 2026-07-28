import { IsNotEmpty, IsString } from 'class-validator'

export class LoginDto {
  @IsString({ message: '参数 $property  必须是字符串' })
  @IsNotEmpty({ message: '参数 $property  不能为空' })
  username: string

  @IsNotEmpty({ message: '参数 $property  不能为空' })
  @IsString({ message: '参数 $property  必须是字符串' })
  password: string

  @IsNotEmpty({ message: '参数 $property  不能为空' })
  @IsString({ message: '参数 $property  必须是字符串' })
  captcha: string

  @IsNotEmpty({ message: '参数 $property  不能为空' })
  @IsString({ message: '参数 $property  必须是字符串' })
  uuid: string
}

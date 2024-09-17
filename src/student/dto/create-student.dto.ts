import { IsInt, IsNotEmpty, IsString } from 'class-validator';

export class CreateStudentDto {
  @IsInt()
  id: number;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  message: string;
}


import { IsString, IsNotEmpty } from 'class-validator';

export class CreateStudentDto {
  @IsString() // it should be a string
  @IsNotEmpty() // it shouldn't be empty
  firstName: string;

  @IsString() // it should be a string
  @IsNotEmpty() // it shouldn't be empty
  lastName: string;

  @IsString() // it should be a string
  @IsNotEmpty() // it shouldn't be empty
  email: string;

  @IsString() // it should be a string
  address: string;
}

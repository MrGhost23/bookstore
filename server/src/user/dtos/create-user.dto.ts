// create-user.dto.ts
import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, IsArray, IsOptional, IsInt, IsIn } from 'class-validator';

export class CartItemDto {
  @IsString()
  bookId: string;

  @IsInt()
  quantity: number;
}

export class CreateUserDto {
  @ApiProperty({ description: 'The email of the user', example: 'user@example.com' })
  @IsEmail()
  email: string;

  @ApiProperty({ description: 'The first name of the user', example: 'Omar' })
  @IsString()
  @IsNotEmpty()
  firstName: string;

  @ApiProperty({ description: 'The last name of the user', example: 'Mohamed' })
  @IsString()
  @IsNotEmpty()
  lastName: string;

  @ApiProperty({ description: 'The password of the user', example: 'password123' })
  @IsString()
  @IsNotEmpty()
  password: string;

  @IsArray()
  @IsOptional()
  wishlist: string[] = [];

  @IsArray()
  @IsOptional()
  cart: CartItemDto[] = [];

  @IsArray()
  @IsOptional()
  orders: string[] = [];

  @ApiProperty({ description: 'The role of the user (default is user)', example: 'user' })
  @IsString()
  @IsIn(['admin', 'user'])
  role: string;
}
// create-user.dto.ts
import { IsEmail, IsNotEmpty, IsString, IsArray, IsOptional, IsInt } from 'class-validator';

export class CartItemDto {
  @IsString()
  bookId: string;

  @IsInt()
  quantity: number;
}

export class CreateUserDto {
  @IsEmail()
  email: string;

  @IsString()
  @IsNotEmpty()
  firstName: string;

  @IsString()
  @IsNotEmpty()
  lastName: string;

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
}
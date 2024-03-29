import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsNumber, Min, MaxLength, IsOptional, IsBoolean, IsUrl, Max } from 'class-validator';

export class CreateBookDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @MaxLength(200)
  title: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @MaxLength(200)
  author: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @MaxLength(200)
  category: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  @Min(0)
  price: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @MaxLength(1000)
  description: string;

  @ApiProperty()
  @IsUrl()
  image: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsBoolean()
  feature: boolean;

  @ApiProperty({ default: 0 })
  @IsOptional()
  @IsNumber()
  @Min(0)
  @Max(5)
  rating: number = 0;
 
}
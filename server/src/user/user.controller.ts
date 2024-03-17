import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
    UsePipes,
    ValidationPipe,
  } from '@nestjs/common';
  import { UserService } from './user.service';
  import { CreateUserDto } from './dtos/create-user.dto';
import { ApiTags } from '@nestjs/swagger';
  
  @ApiTags('User')
  @Controller('user')
  export class UserController {
    constructor(private readonly userService: UserService) {}
  
    @Get()
    getAllUsers() {
      return this.userService.findAll();
    }
  
    @Get(':id')
    getUserById(@Param('id') id: string) {
      return this.userService.findOne(id);
    }
  
    @Post()
    @UsePipes(ValidationPipe)
    createUser(@Body() createUserDto: CreateUserDto) {
      return this.userService.create(createUserDto);
    }
  
    @Put(':id')
    updateUser(@Param('id') id: string, @Body() updateUserDto: CreateUserDto) {
      return this.userService.update(id, updateUserDto);
    }
  
    @Delete(':id')
    deleteUser(@Param('id') id: string) {
      return this.userService.delete(id);
    }
  }
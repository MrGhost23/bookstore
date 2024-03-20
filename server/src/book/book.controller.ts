import { Body, Controller, Delete, Get, Param, Post, Put, Req, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateBookDto } from './dtos/create-book.dto';
import { BookService } from './book.service';
import { AuthGuard } from '@nestjs/passport';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('book')
export class BookController {
    constructor(private readonly bookService: BookService) {}

    @Post()
    @UsePipes(ValidationPipe)
    create(@Body() createBookDto: CreateBookDto) {
      return this.bookService.create(createBookDto);
    }
  
    @Get()
    findAll(@Req() req: Express.Request) {
      return this.bookService.findAll();
    }
  
    @Get(':id')
    findOne(@Param('id') id: string) {
      return this.bookService.findOne(id);
    }
  
    @Put(':id')
    // @UseGuards(JwtAuthGuard)
    update(@Param('id') id: string, @Body() updateBookDto: CreateBookDto) {
      return this.bookService.update(id, updateBookDto);
    }
  
    @Delete(':id')
    @UseGuards(JwtAuthGuard)
    delete(@Param('id') id: string) {
      return this.bookService.delete(id);
    }
}

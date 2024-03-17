import { Body, Controller, Delete, Get, Param, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateBookDto } from './dtos/create-book.dto';
import { BookService } from './book.service';

@Controller('book')
export class BookController {
    constructor(private readonly bookService: BookService) {}

    @Post()
    @UsePipes(ValidationPipe)
    create(@Body() createBookDto: CreateBookDto) {
      return this.bookService.create(createBookDto);
    }
  
    @Get()
    findAll() {
      return this.bookService.findAll();
    }
  
    @Get(':id')
    findOne(@Param('id') id: string) {
      return this.bookService.findOne(id);
    }
  
    @Put(':id')
    update(@Param('id') id: string, @Body() updateBookDto: CreateBookDto) {
      return this.bookService.update(id, updateBookDto);
    }
  
    @Delete(':id')
    delete(@Param('id') id: string) {
      return this.bookService.delete(id);
    }
}

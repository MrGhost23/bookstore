import { Controller, Get, Post, Put, Body, UseGuards, Request, DefaultValuePipe } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { CartService } from './cart.service';

@Controller('cart')
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  getCart(@Request() req) {
    return this.cartService.getAllCart(req.user._id);
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  addToCart(
    @Request() req,
    @Body('bookId') bookId: string,
    @Body('quantity', new DefaultValuePipe(1)) quantity: number,
    ) {
    return this.cartService.addToCart(req.user._id, bookId, quantity);
  }

  @UseGuards(JwtAuthGuard)
  @Put()
  updateQuantity(
    @Request() req,
    @Body('bookId') bookId: string,
    @Body('quantity') quantity: number,
  ) {
    return this.cartService.updateQuantity(req.user._id, bookId, quantity);
  }
}
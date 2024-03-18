import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Cart, CartDocument } from './cart.schema';
import { UserService } from 'src/user/user.service';

@Injectable()
export class CartService {
  constructor(
    @InjectModel(Cart.name)
    private cartModel: Model<CartDocument>,
    private userService: UserService,
  ) {}

  async getAllCart(userId: string) {
    return this.cartModel.findOne({ user: userId }).exec();
  }

  async addToCart(userId: string, bookId: string, quantity: number = 1) {
    let cart = await this.getAllCart(userId);
    
    if (!cart) {
      cart = new this.cartModel({ user: userId, items: [] });
    }
  
    const itemIndex = cart.items.findIndex(item => item.bookId === bookId);
  
    if (itemIndex > -1) {
      cart.items[itemIndex].quantity += quantity;
    } else {
      cart.items.push({ bookId, quantity });
    }
  
    const savedCart = await cart.save();
  
    // Get the user
    const user = await this.userService.findOne(userId);
  
    // Add the cart item to the user's cart array
    user.cart.push({ bookId, quantity });
  
    // Save the user
    await user.save();
  
    return savedCart;
  }

  async updateQuantity(userId: string, bookId: string, quantity: number) {
    const cart = await this.getAllCart(userId);
    const itemIndex = cart.items.findIndex(item => item.bookId === bookId);

    if (itemIndex > -1) {
      // If the item exists in the cart, update the quantity
      cart.items[itemIndex].quantity = quantity;
      return cart.save();
    } else {
      throw new Error('Item not found in cart');
    }
  }
}
import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Cart } from 'src/app/shared/models/Cart';
import { CartItem } from 'src/app/shared/models/CartItem';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {
  cart!:Cart;
  constructor(private cartService: CartService) {
    this.cartService.getCartOberservable().subscribe((cart) => {
      this.cart = cart;
    })
   }

  ngOnInit(): void {
  }

  removeFromCart(cartItem:CartItem){
  this.cartService.removeFromCart(cartItem.food.id);
  }

  changeQuantity(cartItem:CartItem, quantityInString:string){
    const quantity = parseInt(quantityInString);
    this.cartService.changeQuantity(cartItem.food.id, quantity);
  }

  incrementQuantity(cartItem:CartItem){
    this.cartService.incrementQuantity(cartItem.food.id);
  }

  decreaseQuantity(cartItem:CartItem){


    this.cartService.decreaseQuantity(cartItem.food.id);
  }

}

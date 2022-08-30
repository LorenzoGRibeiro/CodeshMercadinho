import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject, Observable } from 'rxjs';
import { foods } from 'src/data';
import { Cart } from '../shared/models/Cart';
import { CartItem } from '../shared/models/CartItem';
import { Food } from '../shared/models/Food';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart: Cart = this.getCartFromLocalStorage();
  private cartSubject: BehaviorSubject<Cart> = new BehaviorSubject(this.cart);

  constructor(private toastr: ToastrService) {}

  addToCart(food: Food): void {
    let cartItem = this.cart.items
    .find(item => item.food.id === food.id);
    if (cartItem) return;

    this.cart.items.push(new CartItem(food));
    this.setCartToLocalStorage();
  }
  removeFromCart(foodId: string): void {
    this.cart.items = this.cart.items
    .filter(item => item.food.id != foodId);
    this.setCartToLocalStorage();
  }

  changeQuantity(foodId: string, quantity: number){
    let cartItem = this.cart.items
    .find(item => item.food.id === foodId);
    if (!cartItem) return;

    cartItem.quantity = quantity;
    cartItem.price = quantity * cartItem.food.price;
    this.setCartToLocalStorage();
  }

  incrementQuantity(foodId: string){
    let cartItem = this.cart.items
    .find(item => item.food.id === foodId);
    let storageItem = foods.find(item => item.id === foodId);
    if (!cartItem)
    return;
    if(cartItem.quantity == storageItem?.quantity){
      return;
    }
    cartItem.quantity++;
    cartItem.price = cartItem.quantity * cartItem.food.price;
    this.setCartToLocalStorage();
  }

  decreaseQuantity(foodId: string){
    let cartItem = this.cart.items
    .find(item => item.food.id === foodId);
    if (!cartItem) return;
    if(!cartItem.quantity ){
      return this.removeFromCart(foodId);
    }

    cartItem.quantity--;
    cartItem.price = cartItem.quantity * cartItem.food.price;
    this.setCartToLocalStorage();
  }

  clearCart(){
    this.cart = new Cart();
    this.setCartToLocalStorage();
  }

  getCartOberservable():Observable<Cart>{
    return this.cartSubject.asObservable();
  }

  getCart():Cart{
    return this.cartSubject.value;
  }

  private setCartToLocalStorage():void{
    //adiciona o carrinho no local storage
    this.cart.totalPrice = this.cart.items
    .reduce((prevSum, currentItem) => prevSum + currentItem.price, 0);

    //adiciona a quantidade de items a local storage
    this.cart.totalCount = this.cart.items
    .reduce((prevSum, currentItem) => prevSum + currentItem.quantity, 0);

    const cartJson = JSON.stringify(this.cart);
    localStorage.setItem('cart', cartJson);

    this.cartSubject.next(this.cart);
  }

  private getCartFromLocalStorage():Cart{
    const cartJson = localStorage.getItem('cart');
    return cartJson ? JSON.parse(cartJson) : new Cart();

  }
}

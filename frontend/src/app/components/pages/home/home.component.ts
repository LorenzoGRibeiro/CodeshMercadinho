import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { FoodService } from 'src/app/services/food.service';
import { Food } from 'src/app/shared/models/Food';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  foods:Food[] = [];
  constructor(private foodService:FoodService, activatedRoute:ActivatedRoute, private cartService:CartService, private router:Router) {
    activatedRoute.params.subscribe((params) =>{
      if(params.searchTerm)
      this.foods = this.foodService.getAllFoodsBySearchTerm(params.searchTerm);
      else if(params.tags)
      this.foods = this.foodService.getAllFoodByTag(params.tags);
      else
      this.foods = this.foodService.getAll();
    })

   }

  ngOnInit(): void {
  }

  addToCart(){
    this.cartService.addToCart(this.foods[0]);
    this.router.navigateByUrl('/cart-page');
  }

}

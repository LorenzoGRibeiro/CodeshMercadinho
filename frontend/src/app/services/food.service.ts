import { Injectable } from '@angular/core';
import { foods,tags } from 'src/data';
import { Food } from '../shared/models/Food';
import { Tag } from '../shared/models/Tags';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAll():Food[]{
    return foods;
  }

  getAllFoodsBySearchTerm(searcTerm:string){
    //faz a conversão na hora da busca para achar tanto com letras maiusculas quanto minusculas
    return this.getAll().filter(foods => foods.name.toLocaleLowerCase().includes(searcTerm.toLocaleLowerCase()))
  }

  getAllTags():Tag[]{
    return tags;
  }

  getAllFoodByTag(tags:string):Food[]{
    return tags == "Todos"?
    this.getAll() :
    this.getAll().filter(foods => foods.category?.includes(tags))
  }

  getFoodById(foodId:string):Food{
    return this.getAll().find(foods => foods.id == foodId)?? new Food();
  }
}

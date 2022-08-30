import {Router} from 'express';
import { sample_foods, sample_tags } from '../data';
import asyncHandler from 'express-async-handler';
import { FoodModel } from '../models/food.model';
const router = Router();



//endpoint to seed the database
router.get('/seed', asyncHandler( async (req, res) => {
    const foodsCount = await FoodModel.countDocuments();
    if(foodsCount > 0){
        res.send("Foods already seeded");
        return;
    }
    await FoodModel.create(sample_foods);
    res.send("Foods seeded");
}));
router.get('/', asyncHandler( async (req, res) => {
    const foods = await FoodModel.find();
    res.send(foods);
}));

//endpoint to get a single food
//endpoint para fazer as pesquisa dos itens pelo nome na barra de pesquisa
router.get("/search/:searchTerm", asyncHandler(async (req, res) => {
    const searchRegex = new RegExp(req.params.searchTerm, "i");
    const foods = await FoodModel.find({name: {$regex:searchRegex}});
    res.send(foods);
}));

//endpoint to get the tags of foods
router.get("/tags", asyncHandler(
    async (req, res) => {
      const tags = await FoodModel.aggregate([
        {
          $unwind:'$tags'
        },
        {
          $group:{
            _id: '$tags',
            count: {$sum: 1}
          }
        },
        {
          $project:{
            _id: 0,
            name:'$_id',
            count: '$count'
          }
        }
      ]).sort({count: -1});
  
      const all = {
        name : 'All',
        count: await FoodModel.countDocuments()
      }
  
      tags.unshift(all);
      res.send(tags);
    }
  ))

//endpoint to get all foods of a particular tag
//endpoint para fazer as pesquisa dos itens pelas tags na pagina inicial
router.get("/tags/:tagName", asyncHandler(async (req, res) => {
    const foods = await FoodModel.find({tags: req.params.tagName});
    res.send(foods);
}));

//endpoint to get a single food
router.get("/:foodId", asyncHandler(async (req, res) => {
    const food = await FoodModel.findById(req.params.foodId);    
    res.send(food);
}));

export default router;
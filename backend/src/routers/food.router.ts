import {Router} from 'express';
import { sample_foods, sample_tags } from '../data';

const router = Router();



router.get('/', (req, res) => {
    res.send(sample_foods);
});

router.get("/search/:searchTerm", (req, res) => {
    const searchTerm = req.params.searchTerm;
    const foods = sample_foods
    .filter(foods => foods.name.toLocaleLowerCase()
    .includes(searchTerm.toLocaleLowerCase()))
    res.send(foods);
});

router.get("/tags", (req, res) => {
    res.send(sample_tags);
});

router.get("/tags/:tagName", (req, res) =>{
    const tagName = req.params.tagName;
    const foods = sample_foods
    .filter(foods => foods.category.includes(tagName))
    res.send(foods);

});

router.get("/:foodId", (req, res) => {
    const foodId = req.params.foodId;
    const food = sample_foods.find(foods => foods.id == foodId);
    res.send(food);
});

export default router;
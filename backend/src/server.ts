import express from "express";
import cors from "cors";
import {foods_items} from "./data"

const app = express();
app.use(cors({ 
    credentials: true,
    origin: ["https://localhost:4200"] 
}));

app.get("/api/foods", (req, res) => {
    res.send(foods_items);
})

app.get("/api/food/search/:searchTerm", (req,res) =>{
    const searchTerm = req.params.searchTerm;
    const foods = 
    foods_items.filter(food => food.name.toLowerCase()
    .includes(searchTerm.toLowerCase()));
   
    res.send(foods);
})

app.get("/api/food/tags", (req, res) => {
    res.send(foods_items);
})

app.get("/api/food/tag/:tagName", (req, res) => {
    const tagName = req.params.tagName;
    const foods = foods_items.filter(food => food.category.includes(tagName));
    res.send(foods);
})

app.get("/api/food/:id", (req, res) => {
    const id = req.params.id;
    const food = foods_items.find(food => food.id == id);
    res.send(food);
})

const port = 5000;
app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
})



import express  from  'express';
import cors from 'cors';
import { sample_foods, sample_tags, sample_users } from './data';
import jwt from 'jsonwebtoken';

const app = express();

app.use(express.json())
app.use(cors());

app.get('/api/foods', (req, res) => {
    res.send(sample_foods);
});

app.get("/api/foods/search/:searchTerm", (req, res) => {
    const searchTerm = req.params.searchTerm;
    const foods = sample_foods
    .filter(foods => foods.name.toLocaleLowerCase()
    .includes(searchTerm.toLocaleLowerCase()))
    res.send(foods);
});

app.get("/api/foods/tags", (req, res) => {
    res.send(sample_tags);
});

app.get("/api/foods/tags/:tagName", (req, res) =>{
    const tagName = req.params.tagName;
    const foods = sample_foods
    .filter(foods => foods.category.includes(tagName))
    res.send(foods);

});

app.get("/api/foods/:foodId", (req, res) => {
    const foodId = req.params.foodId;
    const food = sample_foods.find(foods => foods.id == foodId);
    res.send(food);
});

app.post("/api/users/login", (req, res) =>{
    const {email, password} = req.body;
    const user = sample_users.find(user => user.email === email 
        && user.password === password);
    if(user){
        res.send(generateTokenResponse(user));
    }
    else{
        res.status(401).send({message: "Invalid email or password"});
    }
})

const generateTokenResponse = (user:any) =>{
    const token = jwt.sign({
        email:user.email, 
        isAdmin: user.isAdmin
    }, "SomeRandomText",{
        expiresIn: "30d"
    })
    user.token = token;
    return user;
}

const port = 3000;
app.listen(port, () => {
    console.log(`Server is runnig up on http://localhost:${port}`);
});
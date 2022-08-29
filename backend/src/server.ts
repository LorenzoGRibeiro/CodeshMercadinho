import express  from  'express';
import cors from 'cors';
import { sample_users } from './data';
import jwt from 'jsonwebtoken';
import foodRouter from './routers/food.router';
import userRouter from './routers/user.router';

const app = express();

app.use(express.json())
app.use(cors());


app.use("/api/foods", foodRouter)
app.use("/api/users", userRouter)

const port = 3000;
app.listen(port, () => {
    console.log(`Server is runnig up on http://localhost:${port}`);
});
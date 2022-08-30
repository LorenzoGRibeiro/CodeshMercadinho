import {Router} from 'express';
import jwt from 'jsonwebtoken';
import { sample_users } from '../data';
import asyncHandler from 'express-async-handler';
import { User, UserModel } from '../models/user.model';
import { HTTP_STATUS } from '../constants/http_status';
import bcrypt from 'bcryptjs';

const router = Router();


router.get('/seed', asyncHandler( async (req, res) => {
    const usersCount = await UserModel.countDocuments();
    if(usersCount > 0){
        res.send("Foods already seeded");
        return;
    }
    await UserModel.create(sample_users);
    res.send("Users seeded");
}));
router.get('/', (req, res) => {
    
    res.send(sample_users);
});

router.post("/login", asyncHandler(async(req, res) =>{
    const {email, password} = req.body;
    const user = sample_users.find(user => user.email === email 
        && user.password === password);
    if(user){
        res.send(generateTokenResponse(user));
    }
    else{
        res.status(401).send({message: "Invalid email or password"});
    }    
}))

router.post("/register", asyncHandler(async(req, res) =>{
    const {email, password, name, address} = req.body;
    const user = await UserModel.findOne({email});
    if(user){
        res.status(HTTP_STATUS).send("User already exists")
        return;
    }
    
    const encryptedPassword = await bcrypt.hash(password, 10);

    const newUser:User = {
        id:'',
        name,
        email: email.toLowerCase(),
        password: encryptedPassword,
        address,
        isAdmin: false
    }

    const dbUser = await UserModel.create(newUser);
    res.send(generateTokenResponse(dbUser));    
}))

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

export default router;
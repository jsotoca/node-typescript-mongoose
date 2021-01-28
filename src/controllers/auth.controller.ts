import { Request, Response } from 'express';
import { SignUpDTO } from '../interfaces/dto/signup.dto';
import AuthService from '../services/auth.service';

export const signUp = async (req: Request, res: Response) => {
    const {fullname, email, password } = req.body;
    const signUpDTO:SignUpDTO = {fullname, email, password };
    try {
        const newUser = await AuthService.signUp(signUpDTO);
        res.status(201);
        res.json({
            newUser
        });
    } catch (error) {
        res.status(error.status);
        res.json({
            error
        });
    }
}
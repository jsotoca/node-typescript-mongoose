import User from "../models/user.model";
import { SignUpDTO } from "../interfaces/dto/signup.dto";
import { _err } from "../helpers/error.helper";

export default class AuthRepository {

    public static async signUp(signUpDTO: SignUpDTO){
        const { email } = signUpDTO;
        const foundUser = await User.findOne({email});
        if(foundUser) _err(401,'email ya registrado');
        try {
            const newUser = await User.create(signUpDTO);
            return newUser;
        } catch (error) {
            _err(500,error.message,error.name);
        }
    }

}
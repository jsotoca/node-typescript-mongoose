import { SignUpDTO } from "../interfaces/dto/signup.dto";
import AuthRepository from "../repositories/auth.repository";

export default class AuthService {
    
    public static async signUp(signUpDTO:SignUpDTO){
        return await AuthRepository.signUp(signUpDTO);
    }

}
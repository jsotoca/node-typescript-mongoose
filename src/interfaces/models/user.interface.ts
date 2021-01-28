import { Document } from 'mongoose';

export interface IUser extends Document {
    fullname: string,
    email: string,
    password: string,
    avatar?: string,
    role?: string,
    actived?: string,
    comparePasswords(password :string): boolean
}
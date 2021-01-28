import { Schema, model } from 'mongoose';
import { hashSync, compareSync } from 'bcrypt';
import { IUser } from './../interfaces/models/user.interface';


const userSchema = new Schema({
    fullname: { type: String, required: true, trim: true },
    email: { type: String, unique:true, required: true },
    password: { type: String, required: true, select: false },
    avatar: { type: String, default:'no_avatar.png' },
    role: { type: String, enum: ['ADMIN','USER'], default:'USER' },
    actived: { type: Boolean, default: true },
},{ timestamps: true });

userSchema.methods.toJSON = function<IUser>() {
    const user = this.toObject();
    delete user.password;
    return user;
} 

userSchema.pre<IUser>('save', function(next){
    if(!this.isModified('password')) next();
    this.password = hashSync(this.password,10);
    next();
});

userSchema.method('comparePassword', function<IUser>(password: string){
    return compareSync(password, this.password);
});

const User = model<IUser>('User',userSchema);
export default User;
import { ResponseError } from './../interfaces/error.interface';

export const _err = ( status: number, message:string, name?:string) => {
    let err: ResponseError = {
        name : name,
        message : message,
        status : status
    }
    throw err;
};
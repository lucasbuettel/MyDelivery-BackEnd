import { signInSchema, signUpSchema } from "./../models/authenticate-schema";
import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";

export function ValidateSignUpBody(req: Request, res: Response, next: NextFunction) {
    const user = req.body;
    const { error } =  signUpSchema.validate(user, { abortEarly:false });

    if(error){
        const errors =  error.details.map((detail) => detail.message);
        return res.status(httpStatus.BAD_REQUEST).send(errors);
    }

    next();
};

export function ValidateSignInBody(req: Request, res: Response, next: NextFunction) {
    const user = req.body;
    const { error } =  signInSchema.validate(user, { abortEarly:false });

    if(error){
        const errors =  error.details.map((detail) => detail.message);
        return res.status(httpStatus.BAD_REQUEST).send(errors);
    }

    next();
};
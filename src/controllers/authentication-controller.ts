import { Request, Response } from "express";
import bcrypt from "bcrypt";
import { authenticationService } from "./../services/authentication-service";
import httpStatus from "http-status";

export async function signUpPost (req: Request, res: Response) {
    const { email, password, completeName, cpf, phone } = req.body; 
    const passwordHashed = bcrypt.hashSync(password, 10);

    try{
        const result = await authenticationService.signUp({email, passwordHashed, completeName, cpf, phone}, res);
        console.log(result);
        res.status(httpStatus.OK).send(result);

    } catch(error){
        return res.status(httpStatus.UNAUTHORIZED).send({});
    }
};

export async function signInPost (req: Request, res: Response){
    const { email, password } = req.body;

    try {
        const user = await authenticationService.getUser(email);

        await authenticationService.validatePassword(password, user.password);

        const token = await authenticationService.createSession(user.id);
        res.status(200).send(token);
    } catch (err) {
        console.log(err);
    }
};

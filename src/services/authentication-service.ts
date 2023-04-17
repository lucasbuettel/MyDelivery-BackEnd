import { authenticateRepository } from "./../repositories/authentication-repository";
import bcrypt from "bcrypt";
import { Response } from "express";
import httpStatus from "http-status";
import { invalidCredentialsError } from "./../errors/invalidCredentials-error";
import jwt from "jsonwebtoken";

async function signUp(params: SignUpParams, res:Response) {
    const { email, passwordHashed, completeName, cpf, phone } = params;

    const verifyEmail = await authenticateRepository.findEmail(email);

    if(verifyEmail){
        return res.send(httpStatus.UNAUTHORIZED);
    }
    
    try{
        const result = await authenticateRepository.createAccount(email, passwordHashed, completeName, cpf, phone);
        return result;
    }catch(err){
        console.log(err);
    }
    
}

async function getUser(email: string) {
    const user = await authenticateRepository.findEmail(email);
    if (!user) throw invalidCredentialsError();
  
    return user;
};

async function validatePassword(password: string, userPassword: string) {
    const isPasswordValid = await bcrypt.compare(password, userPassword);
    if (!isPasswordValid) throw invalidCredentialsError();
};

async function createSession(userId: number) {
    const token = jwt.sign({ userId }, process.env.JWT_SECRET);

    await authenticateRepository.createSessionUser(token, userId);
  
    return token;
  }

type SignUpParams = {
    email: string,
    passwordHashed: string,
    completeName: string, 
    cpf: string,
    phone: string
}

export const authenticationService = {
    signUp,
    getUser,
    validatePassword,
    createSession,
}


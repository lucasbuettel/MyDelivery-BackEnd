import joi from "joi";

export const signInSchema = joi.object({
    email: joi.string().required(),
    password: joi.string().required()
})

export const signUpSchema = joi.object({
    completeName:joi.string().required(),
    cpf:joi.string().required(), 
    phone:joi.string().required(),
    email: joi.string().required(),
    password: joi.string().required()
})
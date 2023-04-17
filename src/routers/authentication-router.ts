import { Router } from "express";
import { authenticateToken } from "../middlewares/authentication-middleware";
import { ValidateSignInBody, ValidateSignUpBody } from "./../middlewares/schema-validation";
import { signInPost, signUpPost } from "./../controllers/authentication-controller";

const authenticationRouter = Router();

authenticationRouter
.post("/signup", ValidateSignUpBody, signUpPost)
.post("/signin", ValidateSignInBody, signInPost);


export default authenticationRouter;
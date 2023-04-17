import { authenticateToken } from "./../middlewares/authentication-middleware";
import { getAddressById,  postAddress } from "./../controllers/address-controller";
import { Router } from "express";

const addressRouter = Router();

addressRouter
.all("/*", authenticateToken)
.post("/", postAddress)
.get("/:userId", getAddressById)

export default addressRouter;
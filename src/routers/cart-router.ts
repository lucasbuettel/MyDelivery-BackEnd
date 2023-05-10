import { deleteProduct, getProductsInCart, postProductsInCart } from "./../controllers/cart-controller";
import { authenticateToken } from "./../middlewares/authentication-middleware";
import { Router } from "express";

const cartRouter = Router();

cartRouter
.all("/*", authenticateToken)
.post("/", postProductsInCart)
.get("/:userId", getProductsInCart)
.delete("/", deleteProduct)

export default cartRouter;
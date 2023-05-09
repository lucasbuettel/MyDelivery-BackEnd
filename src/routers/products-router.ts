import { getProductsById, getProductsType, getproductsByTypeId } from "./../controllers/products-controller";
import { authenticateToken } from "./../middlewares/authentication-middleware";
import { Router } from "express";

const productsRouter = Router();

productsRouter
.all("/*", authenticateToken)
.get("/", getProductsType)
.get("/:productTypeId", getproductsByTypeId)
.get("/info/:productId", getProductsById)

export default productsRouter;
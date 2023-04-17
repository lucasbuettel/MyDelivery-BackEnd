import { getProductsType, getproductsByTypeId } from "./../controllers/products-controller";
import { authenticateToken } from "./../middlewares/authentication-middleware";
import { Router } from "express";

const productsRouter = Router();

productsRouter
.all("/*", authenticateToken)
.get("/", getProductsType)
.get("/:productTypeId", getproductsByTypeId)

export default productsRouter;
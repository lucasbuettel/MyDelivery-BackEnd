import { Response } from "express";
import { AuthenticatedRequest } from "./../middlewares/authentication-middleware";
import httpStatus from "http-status";
import productService from "./../services/products-service";

export async function getProductsType(req: AuthenticatedRequest, res: Response) {

    try {
        const product = await productService.getTypes()
        return res.status(httpStatus.OK).send(product);


    } catch (err) {
        res.send(err.message);
    }

}

export async function getproductsByTypeId(req: AuthenticatedRequest, res: Response) {

    const { productTypeId } = req.params;
    try {
        const productsById = await productService.getProductsByIdType(Number(productTypeId));
        return res.status(httpStatus.OK).send(productsById);
    }catch(err){
        res.send(err.message);
    }
    

}

export async function getProductsById(req: AuthenticatedRequest, res: Response) {

    const { productId } = req.params;
   
    try {
        const productsById = await productService.getProductsById(Number(productId));
        return res.status(httpStatus.OK).send(productsById);
    }catch(err){
        res.send(err.message);
    }
    

}
import { Response } from "express";
import { AuthenticatedRequest } from "./../middlewares/authentication-middleware";
import httpStatus from "http-status";
import productService from "./../services/products-service";

export async function getProductsType(req: AuthenticatedRequest, res: Response) {

    try {
        const product = await productService.getTypes()
        return res.status(httpStatus.OK).send(product);


    } catch (err) {
        console.log(err)
    }

}

export async function getproductsByTypeId(req: AuthenticatedRequest, res: Response) {

    const { productTypeId } = req.params;
    console.log(productTypeId);
    try {
        const productsById = await productService.getProductsById(Number(productTypeId));
        return res.status(httpStatus.OK).send(productsById);
    }catch(err){
        console.log(err);
    }
    

}
import { Response } from "express";
import { AuthenticatedRequest } from "./../middlewares/authentication-middleware";
import httpStatus from "http-status";
import cartService from "./../services/cart-service";

export async function postProductsInCart(req: AuthenticatedRequest, res: Response) {
    const { userId }  = req.body
    try {
        const cartShopping = await cartService.postCart({
            ...req.body
          })
        return res.status(httpStatus.OK).send(cartShopping);
    }
    catch (err) {
        console.log(err);
    }
}

export async function getProductsInCart(req: AuthenticatedRequest, res: Response) {

    const { userId } = req.params;
    
    try {
        const productInCart = await cartService.getProductsCart(Number(userId));
        /* console.log(postProductsInCart); */
        return res.status(httpStatus.OK).send(productInCart);
    } catch (err) {
        console.log(err);
    }


}
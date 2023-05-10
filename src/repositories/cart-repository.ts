import prisma from "./../config/database";
import { cartParams } from "./../services/cart-service";


async function createPostInCart({productId, userId, amountProduct, totalPrice}: cartParams) {
    
    return prisma.cart.create({
        data:{
            productId,
            userId, 
            amountProduct, 
            totalPrice,
            createdAt: new Date(),
            updatedAt: new Date(),
        }
    });
};

async function findProductsCart(userId:number) {
    return prisma.cart.findMany({
        where: {
            userId:userId
        }
    })
    
}

async function deleteProductById(productInCartId:number) {
    /* console.log("repository   ", productInCartId); */
    return prisma.cart.delete({
        where: {
            id:productInCartId
        }
    })
}

const cartRepository = {
    createPostInCart,
    findProductsCart,
    deleteProductById
}

export default cartRepository
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

const cartRepository = {
    createPostInCart,
    findProductsCart
}

export default cartRepository
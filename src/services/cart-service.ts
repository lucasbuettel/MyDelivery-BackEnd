import cartRepository from "./../repositories/cart-repository";


async function postCart(params: cartParams) {
    try{
        const result = await cartRepository.createPostInCart(params)
        return result
    }catch(err){
        console.log(err);
    }
}

async function getProductsCart(userId:number) {
    
    
    try{
        const result = await cartRepository.findProductsCart(userId)
        return result;

    }catch(err){
        console.log(err);
    }
}

const cartService = {
    postCart,
    getProductsCart
}

export default cartService;

export type cartParams = {
    productId:number,
    userId: number,
    amountProduct:number, 
    totalPrice:number
} 
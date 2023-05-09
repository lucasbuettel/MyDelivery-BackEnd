import productRepository from "./../repositories/products-repository";

async function getTypes() {
    try{
        const result = await productRepository.findTypesId()
        return result
    }catch(err){
        console.log(err);
    }
}

async function getProductsByIdType(productTypeId:number) {
    
    try{
        const result = await productRepository.findByProductId(productTypeId)
        return result;

    }catch(err){
        console.log(err);
    }
}

async function getProductsById(productId:number) {
    try{
        const result = await productRepository.findProductById(productId)
        return result;

    }catch(err){
        console.log(err);
    }
    
}

const productService = {
    getTypes,
    getProductsByIdType,
    getProductsById
}

export default productService;
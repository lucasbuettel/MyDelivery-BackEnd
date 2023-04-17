import productRepository from "./../repositories/products-repository";

async function getTypes() {
    try{
        const result = await productRepository.findTypesId()
        return result
    }catch(err){
        console.log(err);
    }
}

async function getProductsById(productTypeId:number) {
    
    try{
        const result = await productRepository.findByProductId(productTypeId)
        return result;

    }catch(err){
        console.log(err);
    }
}

const productService = {
    getTypes,
    getProductsById
}

export default productService;
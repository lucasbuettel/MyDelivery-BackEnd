import prisma from "./../config/database";

async function findTypesId() {
    return prisma.productsType.findMany();
};

async function findByProductId(productTypeId:number) {
    return prisma.products.findMany({
        where: {
            producTypeId:productTypeId,
        }
    })
    
}

async function findProductById(productId:number) {
    return prisma.products.findFirst({
        where: {
            id:productId
        }
    })
}

const productRepository = {
    findTypesId,
    findByProductId,
    findProductById
}

export default productRepository
import prisma from "./../config/database";

async function findTypesId() {
    return prisma.productsType.findMany();
};

async function findByProductId(productTypeId:number) {
    return prisma.products.findMany({
        where: {
            producTypeId:productTypeId
        }
    })
    
}

const productRepository = {
    findTypesId,
    findByProductId
}

export default productRepository
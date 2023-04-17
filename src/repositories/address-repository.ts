import { AddressParams } from "./../services/address-service";
import prisma from "./../config/database";

async function postAddress({ street, neighborhood, city, state, number, userId }: AddressParams) {
    return prisma.address.create({
        data: {
            street,
            neighborhood, 
            city, 
            state, 
            number,
            userId, 
            createdAt: new Date(),
            updatedAt: new Date(),
        }
    })
};

async function findByAddressId(userId:number) {
    return prisma.address.findMany({
        where: {
            userId:userId
        }
    })
}

export const AddressRepository = {
    postAddress,
    findByAddressId
}
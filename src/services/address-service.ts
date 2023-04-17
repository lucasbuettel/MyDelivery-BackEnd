import { AddressRepository } from "./../repositories/address-repository";

async function createAdress(params: AddressParams) {
    console.log(params);
    try{
        const result = await AddressRepository.postAddress(params);
    }catch(err){
        console.log(err)
    }
    
}

async function getAddressById(userId:number) {
    try{
        const result = await AddressRepository.findByAddressId(userId)
        return result;

    }catch(err){
        console.log(err);
    }
    
}


export const addressService = {
    createAdress,
    getAddressById
  };

export type AddressParams = {
    street: string,
    neighborhood: string,
    city: string, 
    state: string,
    number: string,
    userId: number 
} 
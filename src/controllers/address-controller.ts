import { addressService } from "./../services/address-service";
import { AuthenticatedRequest } from "./../middlewares/authentication-middleware";
import { Response } from "express";
import httpStatus from "http-status";

export async function postAddress(req:AuthenticatedRequest, res: Response) {
    
    try{
        const address = await addressService.createAdress({
      ...req.body,
      userId: req.userId,
    })
    return res.status(httpStatus.OK).send(address);

    }catch(err){
      console.log(err);
    }
}

export async function getAddressById(req:AuthenticatedRequest, res: Response) {
  const { userId } = req.params;

  try{
    const addressById = await addressService.getAddressById(Number(userId));
    return res.status(httpStatus.OK).send(addressById);
  }catch(err){
    console.log(err);
  }
}

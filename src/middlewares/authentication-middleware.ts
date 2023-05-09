import prisma from "./../config/database";
import { unauthorizedError } from "./../errors/unauthorized-error";
import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";
import * as jwt from "jsonwebtoken";

export async function authenticateToken(req: AuthenticatedRequest, res: Response, next: NextFunction) {
    /* console.log(req) */
    const authHeader = req.header('Authorization');

    if (!authHeader) {
        return generateUnauthorizedResponse(res);
    }

    const token = authHeader.split(" ")[1];
    if (!token) {
        return generateUnauthorizedResponse(res);
    }
    const { userId } = jwt.verify(token, process.env.JWT_SECRET) as JWTPayload;

    try {
        const session = await prisma.session.findFirst({
            where: {
                token,
            },
        });
        if (!session) return generateUnauthorizedResponse(res);


        req.userId = userId;

        return next();
    } catch (err) {
        return generateUnauthorizedResponse;
    }
}

function generateUnauthorizedResponse(res: Response) {
    res.status(httpStatus.UNAUTHORIZED).send(unauthorizedError());
}

export type AuthenticatedRequest = Request & JWTPayload;

type JWTPayload = {
    userId: number;
  };
  
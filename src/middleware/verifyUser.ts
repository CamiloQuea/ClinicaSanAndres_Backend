import { NextFunction, Request, Response } from "express";
import { verifyToken } from "../util/jwt";

export const verifyUser = async (req: Request, res: Response, next: NextFunction) => {

    try {

        const token = req.cookies["token"];

        if (!token) return res.json('NO VALIDO')

        const { payload, error } = verifyToken(token);

        if (error) return res.json('ERROR JWT')

        req.user_id = payload.id;

        next();

    } catch (error) {

        next(error)
        
    }

}
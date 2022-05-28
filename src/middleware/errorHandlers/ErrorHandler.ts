import { NextFunction, Request, Response } from "express"

export const errorHandler = (error: any, req: Request, res: Response, next: NextFunction) => {

    res.json(error)

}
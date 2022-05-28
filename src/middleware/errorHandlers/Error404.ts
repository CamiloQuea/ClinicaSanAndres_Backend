import { NextFunction, Request, Response } from "express"

export const ErrorHandler404 = (req: Request, res: Response, next: NextFunction) => {
    res.json('No existe dicha ruta')
}
import type { NextFunction, Request, Response } from "express"
import jwt from 'jsonwebtoken'

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const authorization = req.headers.authorization
    if(!authorization || !authorization.startsWith('Bearer ')){
        return res.status(401).send({
            message: "Unauthorized"
        })
    }

    const token = authorization.split(' ')[1]

    if (!process.env.JWT_SECRET) {
        throw new Error("JWT_SECRET is not defined")
    }

    try{
        const payload = jwt.verify(token, process.env.JWT_SECRET)

        if (
            typeof payload === "string" ||
            typeof payload.userId !== "string"
        ) {
            return res.status(401).send({
                message: "Invalid token payload"
            })
        }

        req.userId = payload.userId
        next()
    }
    catch(e){
        console.error(e)
        return res.status(401).send({
            message: "Invalid or expired token"
        })
    }
}
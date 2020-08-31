import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

import endpoint from '../../endpoints.config';

interface TokenPayLoad {
    id: string;
    iat: number;
    exp: number;
}

export default function authMiddleware (
    req: Request, res: Response, next: NextFunction,
) {
    const { authorization } = req.headers;

    if(!authorization) {
        return res.sendStatus(401);
    }

    const token = authorization.replace('Bearer', '').trim();

    try{
        const data = jwt.verify(token, endpoint.passwd as string);
        const { id } = data as TokenPayLoad;

        req.userId = id;

        return next();
    } catch {
        return res.sendStatus(401);
    }
}
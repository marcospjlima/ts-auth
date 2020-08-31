import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import User from '../models/User';

import endpoint from '../../endpoints.config';

class AuthControler {
    async authenticate(req: Request, res: Response) {

        const repository = getRepository(User)
        const { email, password } = req.body;

        const user = await repository.findOne({ where: { email }});

        if (!user){
            return res.sendStatus(401);
        }

        const isValidPassword = await bcrypt .compare(password, user.password);

        if (!isValidPassword){
            return res.sendStatus(401);
        } 

        const token = jwt.sign({ id: user.id}, endpoint.passwd as string, { expiresIn: '1d'})

        delete user.password;
        
        return res.json({
            user,
            token,
        });
        
    }
}

export default new AuthControler;
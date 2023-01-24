import { PrismaClient, Users } from "@prisma/client";
import type { Request, Response } from "express";
import * as jwt from "jsonwebtoken"
import * as dotenv from "dotenv"
import { Account, Login } from "./interfaces";

//.env
dotenv.config();

//Declaración de constantes y PC
const SECRET_TOKEN: string = process.env.SECRET_TOKEN as string;

const prisma = new PrismaClient();


//Clase controlador
export default class {
    public registerUser = async (req: Request, res: Response): Promise<void> => {
        try {
            const newUser = req.body as Account;

            const new_register = await prisma.users.create({ data: newUser });
            
            res.status(201).json({
                ok: true,
                message: "User created correctly.",
                new_register
            })
    
        } catch (error) {
            res.status(500).json({
                ok:false,
                message: error
            })
        }
    };

    public loginUser = async (req: Request, res: Response): Promise<void> => {
        try {
            const data = req.body as Login;

            const matchUser = await prisma.users.findMany({
                where:{
                    AND: [{
                        email: data.email,
                        password: data.password
                    }]
                }
            });

            if (matchUser.length === 0) {
                res.status(401).json({ message: "User or password incorrect."});
            } else {
                const token = jwt.sign(data, SECRET_TOKEN, {
                    expiresIn: "1h"
                });            

                res.status(201).json({
                    ok: true,
                    message: `Login successful. Welcome ${matchUser[0].name}`,
                    token
                });
            };    
        } catch (error) {
            res.status(500).json({
                ok:false,
                message: error
            })
        };
    }
    
    public getAllUsers = async (req: Request, res: Response): Promise<void> => {
        try {
            const users = await prisma.users.findMany();
    
            res.status(200).json({
                ok: true,
                users
            })
        } catch (error) {
            res.status(500).json({
                ok: false,
                messagen: error
            })
        }
    };
};
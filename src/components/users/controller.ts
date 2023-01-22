import { PrismaClient } from "@prisma/client";
import type { Request, Response } from "express";
import * as jwt from "jsonwebtoken"
import * as dotenv from "dotenv"
import { match } from "assert";

dotenv.config();
const SECRET_TOKEN: string = process.env.SECRET_TOKEN as string;

const prisma = new PrismaClient();

export default class {
    public registerUser = async (req: Request, res: Response): Promise<void> => {
        try {
            const {
                name,
                email,
                password,
                last_session,
                date_born
            } = req.body;
            
            const new_register = await prisma.users.create({
                data: {
                    name,
                    email,
                    password,
                    last_session,
                    date_born
                }
            });
            
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
            const { email, password } = req.body;

            const matchUser = await prisma.users.findUnique({
                where:{
                    email,
                }
            });

            if (!matchUser || matchUser.password != password) {
                res.status(401).json({ message: "User or password incorrect."});
            } else {
                const token = jwt.sign({ email, password }, SECRET_TOKEN, {
                    expiresIn: "1h"
                });            
    
                res.status(201).json({
                    ok: true,
                    message: `Login successful. Welcome ${matchUser?.name}`,
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
import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getCanciones = async (req:Request, res:Response): Promise<void> =>{
    try{
        const element = await prisma.songs.findMany();

        res.status(200).json({
            ok:true,
            results: element,
            
        });
    }

    catch{
        res.status(500).json({
            ok:false,
            message: Error,
        });
        console.log(Error)
    }

}
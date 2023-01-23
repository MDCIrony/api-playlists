import { Playlists, Prisma, PrismaClient } from "@prisma/client";
import type { Request, Response } from "express";

const prisma = new PrismaClient();

export default class {
    // public createPlaylist = async (req: Request, res: Response): Promise<void> => {

    // }

    public getAllPlaylists = async (req: Request, res: Response): Promise<void> => {
        try {
            const playlists = await prisma.playlists.findMany();
            
            res.status(200).json({
                ok: true,
                playlists
            })
        } catch (error) {
            res.status(500).json({
                ok: false,
                message: error
            })
        }
        
        

    }

    // public getUniquePlaylist = async (req: Request, res: Response): Promise<void> => {
    //     const {name} = req.params;

    //     const infoPlaylist = await prisma.playlists.findUnique({
    //         where:{
                
    //         }
    //     }
    //     )
    // //     id      Int     @id @default(autoincrement())
    // //     name    String
    // //     user_id Int
    // //     user    Users   @relation(fields: [user_id], references: [id])
    // //     songs   Songs[]
    // }
}
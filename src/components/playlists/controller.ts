import { Playlists, Prisma, PrismaClient } from "@prisma/client";
import type { Request, Response } from "express";

const prisma = new PrismaClient();

export default class {
    public createPlaylist = async (req: Request, res: Response): Promise<void> => {
        try {
            const { name, user_id, songs} = req.body;

            console.log("etapa1", name, user_id, songs);
            console.log(songs[0]);

            const playlist = await prisma.playlists.create({
                data:{
                    name,
                    user_id,
                    songs: { connect: {id:songs}}
                }
            });
            console.log("etapa2", playlist);


            res.status(201).json({
                ok: true,
                playlist
            });

        } catch (error) {
            res.status(500).json({
                ok: false,
                message: error
            });
        };
    }

    public getAllPlaylists = async (req: Request, res: Response): Promise<void> => {
        try {
            const playlists = await prisma.playlists.findMany({
                include:{
                    user: true,
                    songs: true
                }
            });
            
            res.status(200).json({
                ok: true,
                playlists
            });
        } catch (error) {
            res.status(500).json({
                ok: false,
                message: error
            });
        };
    }

    public getUniquePlaylist = async (req: Request, res: Response): Promise<void> => {
        try {
            const {name} = req.params;

            const playlist = await prisma.playlists.findUnique({
                where:{
                    name: name
                },
                include: {
                    songs: true,
                    user: true
                }
            });

            res.status(200).json({
                ok: true,
                playlist
            });

        } catch (error) {
            res.status(500).json({
                ok: false,
                message: error
            });
        };
    //     id      Int     @id @default(autoincrement())
    //     name    String
    //     user_id Int
    //     user    Users   @relation(fields: [user_id], references: [id])
    //     songs   Songs[]
    }
}
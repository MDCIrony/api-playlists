import { Playlists, Prisma, PrismaClient } from "@prisma/client";
import type { Request, Response } from "express";

const prisma = new PrismaClient();

export default class {
    public createPlaylist = async (req: Request, res: Response): Promise<void> => {
        try {
            const { name, user_id, songs} = req.body;

            console.log("etapa1", name, user_id, songs);
            console.log(songs[0]);

            var songsArray = songs.map((i: number): any => {
                return {id: i};
            });
            
            console.log(songsArray);

            

            const playlist = await prisma.playlists.create({
                data:{
                    name,
                    user_id,
                    songs: {
                        connect: [{id: songs[0]}, {id: songs[1]}]
                    }
                    // songs: {
                    //     connect: {
                    //         { songsArray }
                    //     }
                    // }
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
                    user: {
                        select: {
                            id: true,
                            name: true,
                            email: true
                        }
                    },
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

            const playlist = await prisma.playlists.findMany({
                where:{
                    name
                },
                include: {
                    songs: true,
                    user: {
                        select: {
                            id: true,
                            name: true,
                            email: true
                        }
                    }
                }
            });

            if (playlist.length == 0) {
                res.status(404).json({
                    ok: false,
                    message: `The playlist ${name} doesn't exist`
                })
            } else {
                res.status(200).json({
                    ok: true,
                    playlist
                });
            };

        } catch (error) {
            res.status(500).json({
                ok: false,
                message: error
            });
        };
    };
};
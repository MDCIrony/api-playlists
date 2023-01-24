import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { url } from "inspector";

const prisma = new PrismaClient();

export const getCanciones = async (req:Request, res:Response): Promise<void> =>{
    try{
        const element = await prisma.songs.findMany();

        res.status(200).json({
            ok:true,
            results: element,
            
        });
    }

    catch(error){
        res.status(500).json({
            ok:false,
            message: error,
        });
        console.log(error)
    }

}

export const postCanciones = async (req:Request, res:Response): Promise<void> =>{
    try {
        const data = req.body 

        const element = await prisma.songs.create({
            data: {
                name: data.name,
                artist: data.artist,
                album: data.album,
                year: data.year,
                genere: data.genere,
                duration: data.duration
            }
        })

        res.status(201).json({
            ok:true,
            results:element,
        })


    }

    catch(error){
        res.status(500).json({
            ok:false,
            message: error,
        });
        console.log(error)
    }
}

export const getIdSong = async (req: Request, res:Response) => {
    try{
        const urlId = req.params.id;
        const element = await prisma.songs.findUnique({
            where: {
                id: Number(urlId),
            }
        });

        res.status(200).json({
            ok:true,
            results: element
        })


    }


    catch(error){
        res.status(500).json({
            ok:false,
            message: error,
        });
        console.log(error)
    }

}
import { verify } from "jsonwebtoken"
import type { Request, Response } from "express";

export default class Middlewares {
    public verifyToken(req: Request, res: Response, next: Function) {
        const bearerHeader = req.headers['authorization'];
    
        if (!bearerHeader) return res.status(401).json({ message: "Unauthorized"});
    
        if (!bearerHeader.startsWith("Bearer ")) return res.status(401).json({ message: "Token format wrong"});
    
        const token = bearerHeader.replace("Bearer ", "");
    
        verify(token, process.env.SECRET_TOKEN as string, (err: any, decoded: any) => {
            if (err) return res.status(401).json({ message: "Invalid token" })
    
            req.body.tokendata = decoded;
    
            next()
        });
    };


    public verifyTokenSongs(req: Request, res: Response, next: Function) {
        const bearerHeader = req.headers['authorization'];
    
        if (!bearerHeader) {
            next()
            
        } else {
            if (!bearerHeader.startsWith("Bearer ")) return res.status(401).json({ message: "Token format wrong"});
    
            const token = bearerHeader.replace("Bearer ", "");
    
            verify(token, process.env.SECRET_TOKEN as string, (err: any, decoded: any) => {
                if (err) return res.status(401).json({ message: "Invalid token" })
    
                req.body.tokendata = decoded;
    
                next()
            });
        }        
    };
};
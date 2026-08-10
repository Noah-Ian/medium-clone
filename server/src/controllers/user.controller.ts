import type { Response } from "express";
import type { AuthRequest } from "../middleware/auth.middleware.js";
import prisma from "../config/database.js";

export async function profile(
    req:AuthRequest,
    res:Response
){
    const user = await prisma.user.findUnique({
        where:{
            id:req.user!.id
        },

        select:{
            id:true,
            name:true,
            email:true,
            bio:true,
            avatar:true
        }
    });

    res.json(user);
}
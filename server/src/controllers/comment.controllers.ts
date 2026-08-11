import type { Response } from "express";
import type { AuthRequest } from "../middleware/auth.middleware.js";
import prisma from "../config/database.js";

export async function createComment(
    req:AuthRequest,
    res:Response
){
   
    try{
    const {
        content
    } = req.body;

    const {
        articleId
    } = req.params;

    if(typeof articleId !== "string"){
        return res.status(404).json({
            message:"invalid Article ID"
        });
    }

    const comment = await prisma.comment.create({
        data:{
            content,
            userId:req.user!.id,
            articleId
        }
    });

    res.status(201).json(comment);
    }catch(error){
        res.status(500).json({
            message:"server error"
        });
    }

    
}
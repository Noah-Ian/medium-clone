import type { Response } from "express";
import type { AuthRequest } from "../middleware/auth.middleware.js";
import prisma from "../config/database.js";

//create comment
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

//getComments
export async function getComments(
    req:AuthRequest,
    res:Response
){
    try{
        const{
            articleId
        }=req.params;

        if(typeof articleId !== "string"){
        return res.status(404).json({
            message:"invalid Article ID"
        });
    }

        const comments = await prisma.comment.findMany({
            where:{
                articleId
            },
            include:{
                user:{
                    select:{
                        name:true,
                        avatar:true
                    }
                }
            },

            orderBy:{
                createdAt:"desc"
            }
        });

        res.json(comments);
    }catch(error){
        res.status(500).json({
            message:"Server error"
        });
    }
}
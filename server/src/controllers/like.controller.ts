import type {Response} from "express";
import type {AuthRequest} from "../middleware/auth.middleware.js";
import prisma from "../config/database.js";

export async function toggleLike(
    req:AuthRequest,
    res:Response
){
    try{
        const{
            articleId
        } = req.params; 

        if(typeof articleId !== "string"){
            return res.status(404).json({
                message:"invalid Article ID"
            });
        }
        
        const existingLike = await prisma.like.findUnique({
            where:{
                userId_articleId:{
                    userId: req.user!.id,
                    articleId
                }
            }
        });

        let liked = false;

        if(existingLike){
            await prisma.like.delete({
                where:{
                    id: existingLike.id
                }
            });

            liked = false;
            
        }else{
            await prisma.like.create({
                data:{
                    articleId,
                    userId:req.user!.id
                }
            });

            liked = true;
        }

        const likeCount = await prisma.like.count({
            where:{
                articleId
            }
        });

        return res.json({
            liked,
            likeCount
        });
      
    }catch(error){
        console.error(error);
        return res.status(500).json({
            message:"failed to toggle like button"
    });
    }
}
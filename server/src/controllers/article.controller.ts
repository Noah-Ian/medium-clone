import type {Response} from "express";
import type {AuthRequest} from "../middleware/auth.middleware.js";
import prisma from "../config/database.js";

//create an article
export async function createArticle(
    req:AuthRequest,
    res:Response
){
    console.log("BODY:", req.body);
    try{
        const{
            title,
            content,
            coverImage,
        } = req.body;

        const article = await prisma.article.create({
            data:{
                title,
                content,
                coverImage,
                authorId:req.user!.id
            }
        });

        res.status(201).json({
            message:"Article created successfully",
            article:{
                id:article.id,
                title:article.title,
                content:article.content,
                coverImage:article.coverImage,
                authorId:article.authorId
            }
        });

    } catch (error) {
        console.error("Error creating article:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}

//get all articles
export async function getArticles(

req:AuthRequest,

res:Response

){

const articles =
await prisma.article.findMany({

where:{
published:true
},

include:{
author:{
select:{
name:true,
avatar:true
}
}
}

});


res.json(articles);

}
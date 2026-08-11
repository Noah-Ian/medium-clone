import type {Response} from "express";
import type {AuthRequest} from "../middleware/auth.middleware.js";
import prisma from "../config/database.js";

//create an article
export async function createArticle(
    req:AuthRequest,
    res:Response
){
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

//get a single article

export async function getArticle(
    req:AuthRequest,
    res:Response
){
    try{
        const {id} = req.params;

        if ( typeof id !== "string"){
            return res.status(400).json({
                message:"Invalid Article ID"
            });
        }

        const article = await prisma.article.findUnique({

            where:{
                id
            },
            include:{
                author:{
                    select:{
                        id:true,
                        name:true,
                        avatar:true
                    }
                }
            }
        });

        if (!article){
            return res.status(404).json({
                message:"Article not found"
            });
        }

        res.json(article);
    }catch(error){
        
        res.status(500).json({
            message:"Server error"
        });
    }
    
}

//updating an article
export async function updateArticle(
    req:AuthRequest,
    res:Response
){
    try{
        const {id} = req.params;

        if(typeof id !== "string"){
            return res.status(400).json({
                message:"Invalid Article ID"
            });
        }

        const article = await prisma.article.findUnique({
            where: {
                id
            }
        });

        if (!article){
            return res.status(404).json({
                message:"Article not found"
            });
        }

        if (article.authorId !== req.user!.id){
            return res.status(403).json({

            message:"Not allowed"

            });
        }

        const updatedArticle = await prisma.article.update({

        where:{
        id
        },

        data:req.body

        });

        res.json(updatedArticle);
    }catch(error){
        res.status(500).json({
            message:"server error"
        });
    }
}

//deleting article

export async function deleteArticle(
    req:AuthRequest,
    res:Response
){
    try{
        const {id} = req.params;

         if(typeof id !== "string"){
            return res.status(400).json({
                message:"Invalid Article ID"
            });
        }

        const article = await prisma.article.findUnique({
            where: {
                id
            }
        });

        if(!article){
            return res.status(404).json({
                message:"Article not found"
            });
        }

        if(article.authorId !== req.user!.id){

        return res.status(403).json({

        message:"Not allowed"

        });

        }

        await prisma.article.delete({

        where:{
        id
        }

        });

        res.json({
            message:"article deleted"
        });
        
    }catch(error){
        res.status(500).json({
            message:"server error"
        });
    }
}

//publishing an article
export async function publishArticle(

req:AuthRequest,

res:Response

){
    try{
        const {id}=req.params;

        if(typeof id !== "string"){
            return res.status(400).json({
                message:"Invalid Article ID"
            });
        }

        const article =
        await prisma.article.findUnique({

        where:{
        id
        }

        });



        if(!article){

        return res.status(404).json({

        message:"Article not found"

        });

        }



        if(article.authorId !== req.user!.id){

        return res.status(403).json({

        message:"Not allowed"

        });

        }



        const publishedArticle =
        await prisma.article.update({

        where:{
        id
        },

        data:{
        published:true
        }

        });


        res.json(publishedArticle);


    }catch(error){
        res.status(500).json({
            message:"server error"
        });
    }

}
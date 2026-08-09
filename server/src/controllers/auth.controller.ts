import type {Request, Response} from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import prisma from "../config/database.js";

//REGISTER USER

export async function register(
    req: Request,
    res: Response
){
    try{
        const{
            name,
            email,
            password
        } = req.body;

        const existingUser =
        await prisma.user.findUnique({
            where:{
                email
            }
        });

        if(existingUser){
            return res.status(400).json({
                message: "Email already exists"
            });
        }

        const hashedPassword = 
        await bcrypt.hash(password,10);

        const user = await prisma.user.create({
            data:{
                name,
                email,
                password:hashedPassword
            }
        });

        res.status(201).json({
            message: "User created successfully",

            user:{
                id:user.id,
                name:user.name,
                email:user.email
            }
        });

    } catch(error){
        console.error("REGISTER ERROR:", error);
        res.status(500).json({
            message: "Server error registration"
        });
    }
}

//USER LOGIN 

export async function login(
    req: Request,
    res: Response
){
    try{

        const{
            email,
            password
        } = req.body;

        const user = await prisma.user.findUnique({

            where:{
                email
            }
        });

        if(!user){
            return res.status(404).json({
                message:"User not Found"
            });
        }

        const passwordMatch = 
        await bcrypt.compare(
            password, 
            user.password
        );

        if(!passwordMatch){
            return res.status(401).json({
                message:"Invalid password or Email"
            });
        
        }

        const token =
        jwt.sign(
            {
                id:user.id,
                email: user.email
            },
            process.env.JWT_SECRET!,
            {
                expiresIn: "7d"
            }
        );

        res.json({
            message:"Login successful",
            token
        });
    }

    catch(error){
        console.error("REGISTER ERROR:", error);
        res.status(500).json({
            message:"Server error login"
        });
    }
}
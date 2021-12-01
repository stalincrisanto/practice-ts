import { Request, Response } from "express";
import Members from "../models/members";

export const getMembers = async (req:Request, res:Response) => {
    const members = await Members.findAll();
    res.json({members});
}

export const postMember = async (req:Request, res:Response) => {
    const {body} = req;
    try {
        const member = Members.build(body);
        await member.save();
        // Se puede utilizar .create que combina el build y save en una sola línea
        // const usuario = await Usuario.create(body);
        res.json(member);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg:'Error interno del servidor'
        })
    }
}
import { Request, Response } from "express";
import Facilities from "../models/facilities";

export const getFacilities = async (req:Request, res:Response) => {
    const facilities = await Facilities.findAll();
    res.json({facilities});
}

export const postFacility = async (req:Request, res:Response) => {
    const {body} = req;
    try {
        const facility = Facilities.build(body);
        await facility.save();
        // Se puede utilizar .create que combina el build y save en una sola línea
        // const usuario = await Usuario.create(body);
        res.json(facility);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg:'Error interno del servidor'
        })
    }
}
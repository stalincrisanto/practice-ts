import { Request, Response } from "express";
import Bookings from "../models/bookings";

export const getBookings = async (req:Request, res:Response) => {
    const bookings = await Bookings.findAll();
    res.json({bookings});
}

export const postBooking = async (req:Request, res:Response) => {
    const {body} = req;
    try {
        const facility = Bookings.build(body);
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

export const putBooking = async (req:Request, res:Response) => {
    const {id} = req.params;
    const {body} = req;

    try {
        const booking = await Bookings.findByPk(id);
        if(!booking){
            return res.status(404).json({
                msg: `No existe el booking con el id: ${id}`
            })
        }
        
        await booking.update(body);

        res.json(booking);

    } catch (error) {
        
    }
}

export const deleteBooking = async (req:Request, res:Response) => {
    const {id} = req.params;

    const bookings = await Bookings.findByPk(id);
    if(!bookings){
        return res.status(404).json({
            msg: `No existe el booking con el id: ${id}`
        })
    }

    // Eliminación física
    await bookings.destroy();
    res.status(200).json({msg:`Booking con id: ${id} se ha eliminado correctamente`})
}
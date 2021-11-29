import { Request, Response } from "express";
import Usuario from "../models/usuario";

export const getUsuarios = async (req:Request, res:Response) => {
    const usuarios = await Usuario.findAll();
    res.json({usuarios});
}

export const getUsuario = async (req:Request, res:Response) => {
    const {id} = req.params;
    const usuario = await Usuario.findByPk(id);
    if(usuario){
        res.json(usuario);
    }else{
        res.status(404).json({
            msg:`El usuario con id ${id} no existe`
        })
    }
}

export const postUsuario = async (req:Request, res:Response) => {
    const {body} = req;
    try {
        const existeEmail = await Usuario.findOne({
            where:{
                email: body.email
            }
        });
        if(existeEmail){
            return res.status(400).json({
                msg:`Ya existe el usuario con el email: ${body.email}`
            });
        }
        const usuario = Usuario.build(body);
        await usuario.save();
        // Se puede utilizar .create que combina el build y save en una sola línea
        // const usuario = await Usuario.create(body);
        res.json(usuario);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg:'Error interno del servidor'
        })
    }
}

export const putUsuario = async (req:Request, res:Response) => {
    const {id} = req.params;
    const {body} = req;

    try {
        const usuario = await Usuario.findByPk(id);
        if(!usuario){
            return res.status(404).json({
                msg: `No existe el usuario con el id: ${id}`
            })
        }
        const existeEmail = await Usuario.findOne({
            where:{
                email: body.email
            }
        });
        if(existeEmail){
            return res.status(400).json({
                msg:`Ya existe el usuario con el email: ${body.email}`
            });
        }

        await usuario.update(body);

        res.json(usuario);

    } catch (error) {
        
    }
}

export const deleteUsuario = async (req:Request, res:Response) => {
    const {id} = req.params;

    const usuario = await Usuario.findByPk(id);
    if(!usuario){
        return res.status(404).json({
            msg: `No existe el usuario con el id: ${id}`
        })
    }

    // Eliminación física
    //await usuario.destroy();

    //Eliminación lógica
    try {
        await usuario.update({estado:0})
        res.json({msg:'Usuario eliminado'});
    } catch (error) {
        console.log(error);
    }

}
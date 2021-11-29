import {DataType, DataTypes} from 'sequelize';
import db from '../db/connection';

const Usuario = db.define('usuarios',{
    nombre: {
        type:DataTypes.STRING
    },
    email: {
        type:DataTypes.STRING
    },
    estado: {
        type:DataTypes.INTEGER
    }
})

export default Usuario;
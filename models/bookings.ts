import {DataType, DataTypes} from 'sequelize';
import db from '../db/connection';

const Bookings = db.define('cd_bookings',{
    memid: {
        type:DataTypes.INTEGER
    },
    facid: {
        type:DataTypes.INTEGER
    },
    starttime: {
        type:DataTypes.DATE
    },
    slots: {
        type:DataTypes.INTEGER
    },
    bookid: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true // Automatically gets converted to SERIAL for postgres
    }
})

export default Bookings;
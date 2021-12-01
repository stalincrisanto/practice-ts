import {DataType, DataTypes} from 'sequelize';
import db from '../db/connection';

import Bookings from './bookings';

const Facilities = db.define('cd_facilities',{
    facid: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true // Automatically gets converted to SERIAL for postgres
    },
    name: {
        type:DataTypes.STRING
    },
    membercost: {
        type:DataTypes.DECIMAL
    },
    guestcost: {
        type:DataTypes.DECIMAL
    },
    initialoutlay: {
        type:DataTypes.DECIMAL
    },
    monthlymaintenance: {
        type:DataTypes.DECIMAL
    }
})

Facilities.hasMany(Bookings,{foreignKey:'facid'});

export default Facilities;
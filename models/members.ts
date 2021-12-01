import {DataType, DataTypes} from 'sequelize';
import db from '../db/connection';

import Bookings from './bookings';

const Members = db.define('cd_members',{
    memid: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true // Automatically gets converted to SERIAL for postgres
    },
    surname: {
        type:DataTypes.STRING
    },
    firstname: {
        type:DataTypes.STRING
    },
    address: {
        type:DataTypes.STRING
    },
    zipcode: {
        type:DataTypes.INTEGER
    },
    telephone: {
        type:DataTypes.STRING
    },
    recommendedby: {
        type:DataTypes.INTEGER
    },
    joindate: {
        type:DataTypes.DATE
    },
})

Members.hasMany(Bookings,{foreignKey:'memid'});

export default Members;
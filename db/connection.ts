import {Sequelize} from 'sequelize';

const db = new Sequelize('postgresql://postgres:stalin@localhost:5432/db_exercises');

export default db;
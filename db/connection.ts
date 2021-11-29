import {Sequelize} from 'sequelize';

const db = new Sequelize('postgresql://postgres:stalin@localhost:5432/db_practices_ts');

export default db;
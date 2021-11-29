import express, {Application} from 'express';
import userRoutes from '../routes/usuario';
import cors from 'cors';
import db from '../db/connection';

class Server {
    private app: Application;
    private port: string;
    private apiPaths = {
        usuarios: '/api/usuarios'
    }

    constructor(){
        this.app = express();
        this.port = process.env.PORT || '8000';
        this.dbConnection();
        this.middlewares();

        //Definir rutas
        this.routes();
    }

    async dbConnection(){
        try {
            await db.authenticate();
            console.log('Conexión exitosa!!')
        } catch (error) {
            throw new Error();
            //console.log(error);
        }
    }

    middlewares(){
        //CORS
        this.app.use(cors());

        //Lectura del body
        this.app.use(express.json());

        //Carpeta pública
    }

    routes(){
        this.app.use(this.apiPaths.usuarios, userRoutes);
    }

    listen(){
        this.app.listen(this.port, ()=> {
            console.log(`Servidor corriendo en puerto ${this.port}`);
        })
    }
}

export default Server;
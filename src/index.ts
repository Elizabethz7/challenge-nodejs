import express, {Application} from 'express';
import morgan from 'morgan';
import cors from 'cors';
//routes
import mutantRoutes from './routes/mutantRoutes';

class Server {

    public app:Application;

    constructor(){
        this.app = express();
        this.config();
        this.routes();
    }

    config():void {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
    }

    routes():void{
        this.app.use('/mutant', mutantRoutes);
    }

    start():void{
        this.app.listen(this.app.get('port'), ()=>{
            console.log('Server on port ', this.app.get('port'));
        });
    }

}

const server = new Server();
server.start();
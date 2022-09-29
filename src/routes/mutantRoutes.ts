import { Router } from 'express';
import { mutantController } from '../controllers/mutantController';

class MutantRoutes{
    public router: Router = Router();

    constructor(){
        this.config();
    }

    config():void {
        this.router.get('/', mutantController.index);
    }

}

const mutantRoutes = new MutantRoutes();
export default mutantRoutes.router;
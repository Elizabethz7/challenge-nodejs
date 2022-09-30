import { Request, Response } from 'express';
import { isMutant } from '../lib/isMutant';

class MutantController{

   public index(req: Request, res: Response) {
      res.send('API running');
   }

    public async isMutant(req:Request, res:Response) {
        console.log(req.body);  
        return isMutant.isMutant(req.body.dna)? res.status(200).send('OK'): res.status(403).send('Forbidden');
    }

}

export const mutantController = new MutantController();
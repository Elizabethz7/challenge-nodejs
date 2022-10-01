import { Request, Response } from 'express';
import { isMutant } from '../lib/isMutant';
import { querys } from '../sources/querys';

class MutantController{

   public index(req: Request, res: Response) {
      res.send('API running');
   }

    public async isMutant(req:Request, res:Response) {
        if(req.body.dna){
            const isMutantReq = isMutant.isMutant(req.body.dna);
            if(isMutantReq){
                return res.status(200).send('OK');
            }
            return res.status(403).send('Forbidden');
        }
        return res.status(403).send('Forbidden');
    }

    public async statistics(req:Request, res:Response) {
        const stats = await querys.stats();
        if(stats){
            return res.json(stats);

        }
        return res.status(500).send('Internal Server Error');
    }

}

export const mutantController = new MutantController();
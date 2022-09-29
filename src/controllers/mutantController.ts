import { Request, Response } from 'express';

class MutantController{

   public index(req: Request, res: Response) {
      res.send('API running');
   }

   // public async getUsers(req:Request, res:Response) {
   //    const pesos = await pool.query('SELECT * FROM usuario');
   //      res.json(pesos);
   // }


}

export const mutantController = new MutantController();
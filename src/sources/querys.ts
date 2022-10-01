import pool from '../connection';
import { Record } from '../models/Record';

class Querys {

    public async insertRegistry(record: Record){
        try {
            const query = await pool.query('INSERT INTO registry(`dna`,`is_mutant`) VALUES(?, ?)',
                [record.dna, record.is_mutant]);  
        } catch (error) {
            console.error(error);
        }
    }

    public async stats(){
        try {
            const query = await pool.query(`SELECT SUM(IF is_mutant = 1, 1, 0)) AS count_mutant_dna,
            SUM(IF is_mutant = 0, 1, 0)) AS count_human_dna, (count_mutant_dna/count_human_dna) ratio FROM registry`);
            return query;   
        } catch (error) {   
            console.error(error);
        }
    }
}

export const querys = new Querys();
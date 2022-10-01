import pool from '../connection';
import { matrixValidations } from '../lib/matrixValidations';
import { Record } from '../models/Record';

class Querys {

    saveRecord(dna: string[], isMutant: boolean){
        let record =  new Record(-1, matrixValidations.arrayToString(dna), isMutant);
        this.insertRegistry(record);
        return isMutant;
    }

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
            const query = await pool.query(`SELECT SUM(IF (is_mutant = 1, 1, 0)) AS count_mutant_dna,
            SUM(IF (is_mutant = 0, 1, 0)) AS count_human_dna, 
            (SUM(IF (is_mutant = 1, 1, 0))/SUM(IF (is_mutant = 0, 1, 0))) AS ratio 
            FROM registry`);
            return query;   
        } catch (error) {   
            console.error(error);
        }
    }
}

export const querys = new Querys();
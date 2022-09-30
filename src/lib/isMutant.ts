import { matrixValidations } from '../lib/matrixValidations';

class IsMutant{

    expresionMatch = new RegExp(/([ATCG])\1{3,}/g);

    public isMutant(dna: string[]): boolean{
        if(!matrixValidations.isSquare(dna)) return false;
        if(!matrixValidations.nIsGreaterOrEqualThanFour(dna)) return false;
        if(!matrixValidations.isOnlyATCG(dna)) return false;

        let count = 0;
        for(let i = 0; i < dna.length; i++){
            let row = dna[i];
            let verticalString = '';
            count += this.checkHorizontal(row);

            for(let j = 0; j < dna.length; j++){

                verticalString += dna[j][i];

                count += this.checkDiagonal(dna, i, j);


                if(count > 1) return true;
            }
            count += this.checkVertical(verticalString);

            if(count > 1) return true;

        }
        console.log('cpunt',count);
        return false;
    }

    public checkMatches(input: string){
        return (input.match(this.expresionMatch))?.length ||0;
    }

    public checkHorizontal(row: string){
        return this.checkMatches(row);
    }

    public checkVertical(row: string){
        return this.checkMatches(row);
    }

    public checkDiagonal(dna: string[], i: number, j: number){
        let count = 0;
        let diagonalString = '';
        let diagonalString2 = '';
        
        // '\' diagonal
        for(let x = i, y = j; x < dna.length && y < dna.length; x++, y++){
            diagonalString += dna[x][y];
        }
        //'/' diagonal
        let x:number = j;
        let y:number = i;
        do{
            diagonalString2 += dna[x][y];
            if(y==j) break;
            x--; y++;

        }while(x>=0 && y<dna.length);

        count += this.checkMatches(diagonalString);
        count += this.checkMatches(diagonalString2);
        
        return count;
    }



}

export const isMutant = new IsMutant();
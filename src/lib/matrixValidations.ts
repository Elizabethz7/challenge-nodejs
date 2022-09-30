class MatrixValidations{

    public isSquare(input: string[]){
        return input.every((row) => row.length == input.length);
    }

    public nIsGreaterOrEqualThanFour(input: string[]){
        return input.length >= 4;
    }
    
    public isOnlyATCG(input: string[]){
        return input.every((row) => row.match(/^[ATCG]+$/));
    }

}

export const matrixValidations = new MatrixValidations();
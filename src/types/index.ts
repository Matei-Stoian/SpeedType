export interface Metrics{
    correctChars:number;
    inccorectChars:number;
    accuracy:number;
}


export type ResultType = {
    accuracy:number;
    cpm:number;
    wpm:number;
    error:number;
}
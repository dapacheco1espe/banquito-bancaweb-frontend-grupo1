export interface LoanTransaction{
    id: number,
    loanUuid: string,
    quotaNum: number,
    dueDate: Date,
    quotaCapital:number,
    quotaInterest:number,
    quotaAmount:number,
    remainingBalance:number,
    quotaStatus:string
   
}
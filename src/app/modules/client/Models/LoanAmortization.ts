export interface LoanAmortization{
    id: number,
    loanUuid: number,
    uuid: number,
    type: string,
    quotaNum: number,
    dueDate: Date,
    quotaCapital:number,
    quotaInterest:number,
    quotaAmount:number,
    remainingBalance: number,
    quotaStatus: string,

}
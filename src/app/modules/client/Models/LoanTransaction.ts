export interface LoanTransaction{
    id: number,
    loanId: number,
    amortizationId: number,
    state: string,
    dueDate: Date,
    repaidDate: Date,
    principalDue: number,
    principalPaid: number,
}
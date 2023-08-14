export interface AccountTransaction{
    id: number,
    uniqueKey: string,
    transactionType:string,
    reference: string,
    ammount: number,
    balanceAfterTransaction: number,
    creditorBankCode: string,
    creditorAccount: string,
    debtorBankCode: string,
    debtorAccount: string,
    creationDate: Date,
    bookingDate: Date,
    valueDate: Date,
    clientUk: string
}
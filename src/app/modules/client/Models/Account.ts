export interface Account{
    id: number,
    uniqueKey: string,
    name:string,
    clientUk: string,
    maxOverdraft: number,
    codeInternalAccount: string,
    availableBalance: number,
    totalBalance: number,
    productUk: string,
    tipoCuenta: string,
}
export interface Account{
    id: number,
    name:string,
    maxOverdraft: number,
    codeInternalAccount: string,
    availableBalance: number,
    totalBalance: number,
}
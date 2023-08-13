export interface Account{
    id: number,
    name:string,
    clientUk: string,
    maxOverdraft: number,
    codeInternalAccount: string,
    availableBalance: number,
    totalBalance: number,
}
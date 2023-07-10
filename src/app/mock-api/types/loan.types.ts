import { NumericDictionary } from 'lodash';

export interface Loan {
    name: String;
    code: String;
    nextPayment: Number;
    nextPaymentDate: Date;
}

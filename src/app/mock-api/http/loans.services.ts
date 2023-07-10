import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Loan } from '../types/loan.types';
import { delay } from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})
export class LoanService {
    constructor() {}

    public getLoan(): Observable<Loan[]> {
        const mockLoan: Loan[] = [
            {
                name: 'Hipotecario',
                code: '32437873',
                nextPayment: 185.5,
                nextPaymentDate: new Date('2023-07-12'),
            },
            {
                name: 'Automovil',
                code: '76487462',
                nextPayment: 185.5,
                nextPaymentDate: new Date('2023-07-13'),
            },
        ];

        return of(mockLoan).pipe(delay(500));
    }
}

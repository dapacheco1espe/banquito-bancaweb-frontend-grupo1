import { Injectable } from '@angular/core';
import { Loan } from 'app/modules/client/Models/Loan';
import { Observable, of } from 'rxjs';

import { delay } from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})
export class LoanService {
    constructor() {}

    public getLoan(): Observable<Loan[]> {
        const mockLoan: Loan[] = [
            {
                id: 1,
                name: 'Hipotecario',
                code: '32437873',
                nextPayment: 185.5,
                nextPaymentDate: new Date('2023-07-12'),
            },
            {
                id: 2,
                name: 'Automovil',
                code: '76487462',
                nextPayment: 185.5,
                nextPaymentDate: new Date('2023-07-13'),
            },
        ];

        return of(mockLoan).pipe(delay(500));
    }
}

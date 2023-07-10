import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Account } from '../types/account.types';
import { delay } from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})
export class AccountService {
    constructor() {}

    public getAccount(): Observable<Account[]> {
        const mockAccount: Account[] = [
            {
                code: '2123464979',
                name: 'AHO4979',
                balance: 1055.41,
                type: 'Cuenta de Ahorros',
            },
            {
                code: '278965412',
                name: 'CCO5779',
                balance: 890.25,
                type: 'Cuenta Corriente',
            },
            {
                code: '6598741236',
                name: 'AHOPR4979',
                balance: 247.54,
                type: 'Cuenta de Ahorro Programado',
            },
        ];

        return of(mockAccount).pipe(delay(500));
    }
}

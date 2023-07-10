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
                code: '2290876755',
                name: 'AHO1',
                balance: 100.0,
                type: 'AHORROS',
            },
            {
                code: '2389476563',
                name: 'COR1',
                balance: 150.0,
                type: 'CORRIENTE',
            },
            {
                code: '2490876538',
                name: 'PRO1',
                balance: 150.0,
                type: 'PROGRAMADO',
            },
        ];

        return of(mockAccount).pipe(delay(500));
    }
}

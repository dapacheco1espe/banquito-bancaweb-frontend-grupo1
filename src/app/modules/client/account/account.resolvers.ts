import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { forkJoin, Observable } from 'rxjs';
import { AccountService } from './services/account.service';
import { ClientDataShareService } from '../services/client-data-share.service';

@Injectable({
    providedIn: 'root'
})
export class AccountsResolver implements Resolve<any>
{
    /**
     * Constructor
     */
    private _customerUK:string = '';
    constructor(
        private _accountService:AccountService,
        private _clientService: ClientDataShareService,
    )
    {
        this._customerUK = this._clientService.getClientUk()
        
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Use this resolver to resolve initial mock-api for the application
     *
     * @param route
     * @param state
     */
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any>
    {
        // Fork join multiple API endpoint calls to wait all of them to finish
        return forkJoin([
            this._accountService.getUserAccounts(this._customerUK),
        ]);
    }
}

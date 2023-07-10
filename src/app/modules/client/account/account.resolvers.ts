import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { forkJoin, Observable } from 'rxjs';
import { AccountService } from './services/account.service';
import { UserService } from 'app/core/user/user.service';
import { User } from 'app/core/user/user.types';

@Injectable({
    providedIn: 'root'
})
export class AccountsResolver implements Resolve<any>
{
    /**
     * Constructor
     */
    private _customerId:any = 0;
    constructor(
        private _accountService:AccountService,
        private _userService:UserService,
    )
    {
        this._userService.user$.subscribe({
            next:(user:User)=>{
                this._customerId = user.id;
            }
        });
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
            this._accountService.getUserAccounts(this._customerId),
        ]);
    }
}

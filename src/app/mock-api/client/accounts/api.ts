import { Injectable } from '@angular/core';
import { FuseMockApiService, FuseMockApiUtils } from '@fuse/lib/mock-api';
import { accounts } from './data';
import { Account } from 'app/modules/client/Models/Account';
@Injectable({
    providedIn: 'root'
})
export class ClientAccountsMockApi
{
    private readonly _accounts:Array<Account> = [];
    /**
     * Constructor
     */
    constructor(private _fuseMockApiService: FuseMockApiService)
    {
        this._accounts = [...accounts];
        // Register Mock API handlers
        this.registerHandlers();
    }

    /**
    * Register Mock API handlers
    */
    registerHandlers(): void
    {

        //POST Method: /accounts
        this._fuseMockApiService.onPost('/accounts')
        .reply(({request})=>{
             //return accounts
            return [200, this._accounts];
        })
    }
}
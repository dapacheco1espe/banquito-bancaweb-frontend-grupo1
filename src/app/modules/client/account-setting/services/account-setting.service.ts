import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AccountSettingService {
  private urlApi='https://64b14cc3062767bc4825fe08.mockapi.io/api/v1/account';

  constructor(private _http:HttpClient) { }
  public updateMaxOverdraft(accountId: number, maxOverdraft: number): Observable<any> {
    const url = `${this.urlApi}/${accountId}`;
  
    const accountData = {
      maxOverdraft: maxOverdraft
    };
  
    return this._http.put(url, accountData).pipe(
      tap(response => {
        
      })
    );
  }
}

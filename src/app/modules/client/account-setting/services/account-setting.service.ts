import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AccountSettingService {
  private urlApi='http://localhost:9003/api/v1/accounts';

  constructor(private _http:HttpClient) { }
  
  
  public updateMaxOverdraft(accountUk: string, maxOverdraft: number): Observable<any> {
    const url = `${this.urlApi}/account/${accountUk}`;
  
    const accountData = {
      maxOverdraft: maxOverdraft
    };
  
    return this._http.put(url, accountData).pipe(
      tap(response => {
        console.log("Successful PUT request:", response);
      }),
      catchError(error => {
        console.error("Error in PUT request:", error);
        throw error;
      })
    );
  }
  
}

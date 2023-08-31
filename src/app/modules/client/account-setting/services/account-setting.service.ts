import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AccountSettingService {
  private urlApi='';
  private jwt='';

  

  constructor(private _http:HttpClient) { 
    this.urlApi=environment.urlApiAccount;
    this.jwt=environment.apiSecurity;
  }
  
  
  public updateMaxOverdraft(accountUk: string, maxOverdraft: number): Observable<any> {
    const url = `${this.urlApi}/account/${accountUk}/max-overdraft${this.jwt}`;
    const queryParams = new HttpParams().set('maxOverdraft', maxOverdraft.toString());
  
    return this._http.put(url, null, { params: queryParams }).pipe(
      tap(response => {
        //console.log("Successful PUT request:", response);
      }),
      catchError(error => {
        console.error("Error en el request");
        throw error;
      })
    );
  }
  
  
  
}

import { HttpClient, HttpHeaders } from '@angular/common/http';
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
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:4200', // Ajusta esto según tu frontend
      // Agrega otras cabeceras necesarias aquí
    });
    const options = { headers: headers };
    const url = `${this.urlApi}/account/${accountUk}`;
  
    const accountData = {
      maxOverdraft: maxOverdraft
    };
  
    return this._http.put(url, accountData, options).pipe(
      tap(response => {
        console.log("Successful PUT request:", response);
      }),
      catchError(error => {
        console.error("Error in PUT request:"+ accountData , error);
        throw error;
      })
    );
  }
  
}

import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Loan } from '../Models/Loan';

@Injectable({
  providedIn: 'root'
})
export class ClientDataShareService {
  private clientUk: string;

  setClientUk(id: string) {
    this.clientUk = id;
  }

  getClientUk() {
    return this.clientUk;
  }
}

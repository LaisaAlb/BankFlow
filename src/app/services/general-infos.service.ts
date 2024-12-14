import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeneralInfosService {
  private readonly _httpClient = inject(HttpClient);

  getIncidents(): Observable<{ day: number }> {
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('access-token'));

    return this._httpClient.get<{ day: number }>('http://localhost:3000/incidents', { headers });
  }

  getPendingPayments(): Observable<{ pending: number }> {
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('access-token'));

    return this._httpClient.get<{ pending: number }>('http://localhost:3000/pending-payments', { headers });
  }

  getNewAccounts(): Observable<{ accounts: number }> {
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('access-token'));

    return this._httpClient.get<{ accounts: number }>('http://localhost:3000/new-accounts', { headers });
  }

  getActiveUsers(): Observable<{ users: number }> {
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('access-token'));

    return this._httpClient.get<{ users: number }>('http://localhost:3000/active-users', { headers });
  }
}

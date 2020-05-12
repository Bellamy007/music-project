import { Injectable } from '@angular/core';
import { Client } from './client-model';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private urlClient = `${environment.baseUrl}/clients`;
  constructor(private http: HttpClient) {
  }

  saveClient(requestData: Client): Observable<any> {
    return this.http.post<Client>(this.urlClient, requestData);
  }

  getLastClient() {
    return this.http.get<Client[]>(this.urlClient).pipe(map(response => {
      return response.length;
    }));
  }
}

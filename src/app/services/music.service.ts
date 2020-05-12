import { Injectable } from '@angular/core';
import { Track } from 'ngx-audio-player';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MusicService {
  private urlClient = `${environment.baseUrl}/music`;

  constructor(private http: HttpClient) { }

  getPlayList(): Observable<Track[]> {
    return this.http.get<Track[]>(this.urlClient);
  }
}

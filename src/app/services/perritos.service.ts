import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PerritosService {

  private url = "https://dog.ceo/api/breeds/image/random";

  constructor(private http: HttpClient) { }

  getPerritoImg(): Observable<any> {
    return this.http.get(this.url)
  }
}

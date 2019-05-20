import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemsServiceService {

  constructor(private http: HttpClient) {

   }

  getJSON() {
    return this.http.get("assets/items.json");
  }
}

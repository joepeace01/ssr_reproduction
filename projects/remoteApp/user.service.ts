import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private jsonUrl = 'http://localhost:4202/assets/moke-data/user.json'; // Chemin vers le fichier JSON

  http = inject(HttpClient);

  getUsers(): Observable<any> {
    return this.http.get<any>(this.jsonUrl);
  }
}

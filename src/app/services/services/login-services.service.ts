import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'app/models/users/user.model';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class LoginServicesService {

  private baseUrl = " localhoset:8080/ ";

  constructor(private peticiones:HttpClient) { }

  sendUsers():Observable<User[]>{
    return this.peticiones.get<User[]>(`${this.baseUrl} /api/user/get/all `);
  }
 
}

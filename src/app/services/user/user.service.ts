import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { user } from 'src/app/models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  //observable observer subscriber

  getAllUsers() {
    return this.http.get<user[]>('https://jsonplaceholder.typicode.com/users')
  }

}

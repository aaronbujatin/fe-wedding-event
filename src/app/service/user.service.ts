import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  private readonly API_URL = "http://localhost:8080/api/v1/users";


  public sendInquiry(user:User) {
    return this.httpClient.post(this.API_URL, user);
  }

}

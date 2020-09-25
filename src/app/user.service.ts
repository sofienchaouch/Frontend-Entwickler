import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private getAllUsersUrl = "http://localhost:3000/persons";
  private getOneUserUrl = "http://localhost:3000/persons/";
  private deleteUserUrl = "http://localhost:3000/persons/";
  private addUserUrl =   "http://localhost:3000/persons";
  private updateUserUrl = "http://localhost:3000/persons/";



  constructor(private http: HttpClient) { }

  getAllUsers() {
    return this.http.get<any>(this.getAllUsersUrl);
  }

  getOneUser(id: String) {
    return this.http.get<any>(this.getOneUserUrl + id)
  }

  deleteUser(id: String) {
    return this.http.delete<any>(this.deleteUserUrl + id)
  }

  addUser(user: User) {
    return this.http.post<any>(this.addUserUrl, user);
  }

  updateUser(user:User , id:String){
    return this.http.put<any>(this.updateUserUrl + id , user);
  }



}
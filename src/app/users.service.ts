import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get('http://localhost/sites/formsubmit/getusers.php');
  }

  editUser(userId) {
    return this.http.get('http://localhost/sites/formsubmit/edituser.php?id='+userId);
  }

  updateUser(val) {
    this.http.post('http://localhost/sites/formsubmit/updateuser.php', val)
    .subscribe((data) => {
      console.log(data)
    }, (error) => {
      console.log(error);
    })
  }

  addUser(val) {
    this.http.post('http://localhost/sites/formsubmit/adduser.php', val)
    .subscribe((data) => {
      console.log(data)
    }, (error) => {
      console.log(error);
    })
  }
}
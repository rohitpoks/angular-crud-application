import { HttpClient } from '@angular/common/http';
import { identifierName } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Customer } from '../customer/customer';
import { Admin } from './admin';

@Injectable({
  providedIn: 'root',
})
export class AccessorService {
  private people: Admin[] = [];
  loggedIn: boolean = false;
  currentID: number = 0;
  person: Admin = { id: 0, name: '', role: '', username: '', password: '' };
  constructor(private http: HttpClient) {
    // this.people.push({ name: 'Rohit', role: 'DB Admin', id: 0 });
    // this.people.push({ name: 'Shyam', role: 'Server Admin', id: 1 });
    // this.people.push({ name: 'Harshit', role: 'Web Admin', id: 2 });
  }

  peopleList() {
    let url = 'http://localhost:3000/people';
    return this.http.get<Admin[]>(url);
  }

  getAdmin(id: number) {
    let url = 'http://localhost:3000/people/' + id;
    // this.http.get<Admin>(url).subscribe((data) => {
    //   this.person = data;
    // });
    return this.http.get<Admin>(url);
  }

  addToList(values: any) {
    let temp: Admin = { id: 0, name: '', role: '', username: '', password: '' };
    temp['id'] = values.id;
    temp['name'] = values.name;
    temp['role'] = values.role;
    temp['username'] = values.username;
    temp['password'] = values.password;
    let url = 'http://localhost:3000/people';
    this.http.post<Admin>(url, temp).subscribe();
  }

  editList(values: any) {
    let temp: Admin = { id: 0, name: '', role: '', username: '', password: '' };
    temp['id'] = values.id;
    temp['name'] = values.name;
    temp['role'] = values.role;
    this.getAdmin(this.currentID).subscribe((data) => {
      temp['username'] = data.username;
      temp['password'] = data.password;
      let url = 'http://localhost:3000/people/' + values.id;
      this.http.put(url, temp).subscribe();
    });
  }

  deleteList(id: number) {
    let url = 'http://localhost:3000/people/' + id;
    this.http.delete(url).subscribe();
  }

  getAdminByUsername(username: string) {
    return this.http.get<Admin[]>(
      'http://localhost:3000/people?username=' + username
    );
  }

  getCustomer() {
    let url = 'http://localhost:3000/customers';
    return this.http.get<Customer[]>(url);
  }
}

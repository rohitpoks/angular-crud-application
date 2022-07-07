import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from './customer';
@Injectable({
  providedIn: 'root',
})
export class AccessorService {
  constructor(private http: HttpClient) {}
  loggedIn: boolean = false;
  currentID = 0;
  getPeople() {
    let url: string = 'http://localhost:3000/customers';
    return this.http.get<Customer[]>(url);
  }

  getCustomer(id: number) {
    let url: string = 'http://localhost:3000/customers/' + id;
    return this.http.get<Customer>(url);
  }

  addToList(values: any) {
    let temp: Customer = { id: 0, name: '', age: 0, gender: '', username: '', password: '' };
    temp['id'] = values.id;
    temp['name'] = values.name;
    temp['gender'] = values.gender;
    temp['age'] = values.age;
    let url = 'http://localhost:3000/customers';
    this.http.post<Customer>(url, values).subscribe();
  }

  deleteList(id: number) {
    let url = 'http://localhost:3000/customers/' + id;
    this.http.delete(url).subscribe();
  }

  editList(values: any) {
    let url = 'http://localhost:3000/customers/' + values.id;
    this.http.put(url, values).subscribe();
  }

  getCustomerByUsername(username: string) {
    let url = 'http://localhost:3000/customers/?username=' + username;
    return this.http.get<Customer[]>(url);
  }

  // checkUsernameNotTaken(username: string) : Observable<Boolean> {
  //   let url = "http://localhost:3000/customers/?username="+username
  //   return this.http.get<any[]>(url).pipe(
  //     map((usernameList: Array<any>) => 
  //       usernameList.filter(user => user.username === username)
  //     ),
  //     map(users => !users.length)
  //   );
  // }
}

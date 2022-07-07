import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccessorService } from '../accessor.service';
import { Admin } from '../admin';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent implements OnInit {
  set: Set<String> = new Set();
  actualID: number = 0;
  checkID = (id: any) => {
    this.actualID = this.service.peopleList.length;
    return this.service.peopleList.length == id.value
      ? null
      : { wrongID: true };
  };

  constructor(
    private fb: FormBuilder,
    private service: AccessorService,
    private router: Router
  ) {}

  validateUsername = (control: AbstractControl) => {
    if (this.set.has(control.value)) return { duplicate: true };
    return null;
  };

  registrationForm = this.fb.group({
    name: ['', [Validators.required]],
    role: ['', [Validators.required]],
    username: ['', [Validators.required, this.validateUsername]],
    password: ['', [Validators.required]],
  });

  ngOnInit(): void {
    let people: Admin[] = [];
    this.service.peopleList().subscribe((data) => {
      people = data;
      for (let x of people) {
        this.set.add(x.username);
      }
    });
  }

  get name() {
    return this.registrationForm.get('name');
  }

  get id() {
    return this.registrationForm.get('id');
  }

  get role() {
    return this.registrationForm.get('role');
  }

  onSubmit(values: any) {
    this.service.addToList(values);
  }

  get username() {
    return this.registrationForm.get('username');
  }

  goBack() {
    this.router.navigateByUrl('/admin/' + this.service.currentID);
  }

  get password() {
    return this.registrationForm.get('password');
  }
}

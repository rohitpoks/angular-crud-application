import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { map } from 'rxjs';
import { AccessorService } from '../accessor.service';
import { Customer } from '../customer';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent implements OnInit {
  set: Set<String> = new Set();

  validateUsername = (control: AbstractControl) => {
    if (this.set.has(control.value)) return { duplicate: true };
    return null;
  };

  ngOnInit(): void {
    let people: Customer[] = [];
    this.service.getPeople().subscribe((data) => {
      people = data;
      for (let x of people) {
        this.set.add(x.username);
      }
    });
  }

  constructor(private fb: FormBuilder, private service: AccessorService) {}

  registrationForm = this.fb.group({
    name: ['', [Validators.required]],
    gender: ['', [Validators.required]],
    age: ['', [Validators.required]],
    username: ['', [this.validateUsername, Validators.required]],
    password: ['', [Validators.required]],
  });

  get name() {
    return this.registrationForm.get('name');
  }

  get gender() {
    return this.registrationForm.get('gender');
  }

  get age() {
    return this.registrationForm.get('age');
  }

  onSubmit(values: any) {
    this.service.addToList(values);
  }

  get username() {
    return this.registrationForm.get('username');
  }

  get password() {
    return this.registrationForm.get('password');
  }
}

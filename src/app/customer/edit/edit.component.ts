import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AccessorService } from '../accessor.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private service: AccessorService,
    private activated: ActivatedRoute
  ) {}
  editID = 0;
  registrationForm = this.fb.group({
    name: ['', Validators.required],
    id: [0, Validators.required],
    age: [0, Validators.required],
    gender: ['', Validators.required]
  });
  ngOnInit(): void {
    this.activated.paramMap.subscribe((data) => {
      this.editID = Number(data.get('id'));
      this.service.getCustomer(this.editID).subscribe(
        (data) => {
          let person = data;
          this.registrationForm = this.fb.group({
            name: [person.name, Validators.required],
            id: [person.id, [Validators.required]],
            gender: [person.gender, Validators.required],
            age: [person.age, Validators.required],
          });
        }
      );
    });
  }

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

  onEdit(values: any) {
    this.service.getCustomer(values.id).subscribe(
      (data) => {
        values.username = data.username;
        values.password = data.password;
        this.service.editList(values);
      }
    )
  }
}

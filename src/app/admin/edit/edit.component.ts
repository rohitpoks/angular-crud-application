import { Component, OnInit } from '@angular/core';
import { AccessorService } from '../accessor.service';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Admin } from '../admin';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent implements OnInit {
  enabled = false;
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
    private activator: ActivatedRoute,
    private router: Router
  ) {}
  registrationForm = this.fb.group({
    name: ['', Validators.required],
    id: [0, [Validators.required]],
    role: ['', Validators.required],
  });
  defaultID = 0;
  ngOnInit(): void {
    let person: Admin = {
      name: '',
      id: 0,
      role: '',
      username: '',
      password: '',
    };
    this.activator.paramMap.subscribe((data) => {
      this.defaultID = Number(data.get('id'));
      this.service.getAdmin(this.defaultID).subscribe((data) => {
        person = data;
        this.registrationForm = this.fb.group({
          name: [person.name, Validators.required],
          id: [person.id, [Validators.required]],
          role: [person.role, Validators.required],
        });
      });
    });
    // let peopleList: Admin[] = [];
  }

  goBack() {
    this.router.navigateByUrl('/admin/crud' + this.service.currentID);
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
    this.router.navigateByUrl('/admin/' + this.service.currentID);
    this.service.editList(values);
  }
}

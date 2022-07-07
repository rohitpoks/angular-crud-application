import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccessorService } from '../accessor.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private accessor: AccessorService,
    private router: Router,
  ) {}

  ngOnInit(): void {}
  loginForm = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
  });

  get username() {
    return this.loginForm.get('username');
  }

  get password() {
    return this.loginForm.get('password');
  }

  onSubmit(values: any) {
    this.accessor
      .getAdminByUsername(String(this.loginForm.get('username')?.value))
      .subscribe((data) => {
        if (
          data.length != 0 &&
          data[0].username === values.password &&
          data[0].password == values.password
        ) {
          this.accessor.loggedIn = true;
          this.accessor.currentID = data[0].id;
        } else this.accessor.loggedIn = false;
        if (this.accessor.loggedIn)
          this.router.navigateByUrl('/admin/' + data[0].id);
        else {
          this.router.navigateByUrl('/customer/invalid');
        }
      });
  }
}

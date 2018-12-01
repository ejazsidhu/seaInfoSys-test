import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { EmailValidator } from 'src/assets/validators/email.validator';
import { Router } from '@angular/router';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public form: FormGroup;
  public email: AbstractControl;
  public password: AbstractControl;
  message: any = '';

  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.form = this.fb.group({
      'email': ['mail@infoSys.com', Validators.compose([Validators.required, EmailValidator.validate, Validators.minLength(4)])],
      'password': ['pakistan', Validators.compose([Validators.required])],
    });
    this.email = this.form.controls['email'];
    this.password = this.form.controls['password'];
  }

  onSubmit(form) {

    if (form.valid) {
      if (form.value.email == 'mail@infoSys.com' && form.value.password == 'pakistan') {
        this.router.navigate(['/home']);
      }
      else {
        this.message = 'email or password not correct.'
      }

    }

  }
}
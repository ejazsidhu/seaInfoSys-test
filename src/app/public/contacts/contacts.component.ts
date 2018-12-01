import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EmailValidator } from 'src/assets/validators/email.validator';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  public form: FormGroup;

  public message = '';
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      name: ['', Validators.compose([Validators.required])],
      email: ['', Validators.compose([Validators.required, EmailValidator.validate, Validators.minLength(4)])],
      subject: ['', Validators.compose([Validators.required])],
      body: ['', Validators.compose([Validators.required])]
    });
  }

  onSubmit(form) {

    if (form.valid) {
      setTimeout(() => {
        this.form.reset();
        this.message = "Contact added successfully";

        setTimeout(() => {
          this.message='';
          
        }, 3000);

      }, 3000);
    }

  }

}

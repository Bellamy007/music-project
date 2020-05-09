import { Component, OnInit } from '@angular/core';
import {FormControl,  FormGroup, NgForm, Validators} from '@angular/forms';


@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {
  validateForm = new FormGroup({
    emailFormControl: new FormControl('', [
      Validators.required,
      Validators.email,
    ]),
    nameControl : new FormControl('', [
      Validators.required,
    ]),
    lastNameControl : new FormControl('', [
      Validators.required,
    ]),
    dateFomrControl : new FormControl('', [
      Validators.required,
    ]),
    genderFormControl : new FormControl('', [
      Validators.required,
    ])
  });

  constructor() { }

  ngOnInit() {
  }


}

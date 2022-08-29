import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  LoginSession!: FormGroup;
  isSubmitted = false;
  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.LoginSession = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    })
  }

  get formControls() {
    return this.LoginSession.controls;
  }

  login() {
    this.isSubmitted = true;
    if(this.LoginSession.invalid)
      return;

    alert(JSON.stringify(this.LoginSession.value, null, 4));
  }



}

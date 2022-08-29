import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  LoginSession!: FormGroup;
  isSubmitted = false;
  returnUrl = '';
  constructor(private formBuilder:FormBuilder,
    private userService:UserService,
    private activatedRoute:ActivatedRoute,
    private router:Router) { }

  ngOnInit(): void {
    this.LoginSession = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    })

    this.returnUrl = this.activatedRoute.snapshot.queryParams.returnUrl;
  }

  get formControls() {
    return this.LoginSession.controls;
  }

  login() {
    this.isSubmitted = true;
    if(this.LoginSession.invalid) return;

    this.userService.login({email:this.formControls.email.value,
       password:this.formControls.password.value}).subscribe(()=>{
          this.router.navigateByUrl(this.returnUrl);
       });
  }



}

import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {AuthService} from '../services/auth/auth.service';
import {FirebaseService} from "../services/firebase/firebase.service";

@Component({
  selector: 'app-signup-login',
  templateUrl: './signup-login.component.html',
  styleUrls: ['./signup-login.component.scss']
})
export class SignupLoginComponent implements OnInit {

  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required]);
  username = new FormControl('', [Validators.required]);
  photo = new FormControl(undefined, [Validators.required]);
  login = true;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private fire: FirebaseService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.login = this.route.snapshot.data.login;
  }

  getErrorMessage(): string {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  signUp(): void {
    this.authService.SignUp(this.email.value, this.password.value, this.username.value, this.photo.value);
  }

  signIn(): void {
    this.authService.SignIn(this.email.value, this.password.value);
  }


}

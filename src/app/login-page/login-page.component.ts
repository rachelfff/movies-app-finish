import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {LoginPageService} from './login-page.service';
import {Subscription} from 'rxjs';
import {Router} from '@angular/router';
import {first} from 'rxjs/operators';

const admin = 'admin';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit , OnDestroy {
  form: FormGroup;
  subscription = new Subscription();
  message =  {description: null , status: null};
  submitted = false;

  constructor(private loginPageService: LoginPageService, private fb: FormBuilder, private router: Router) {
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      userName: ['', [Validators.pattern('^[a-zA-Z ]+'), Validators.required, Validators.maxLength(20)]],
      password: ['', [Validators.pattern('^[a-zA-Z0-9 ]+'), Validators.required, Validators.maxLength(20)]]
    });
  }

  formSubmitted() {
    this.submitted = true;
    if (this.form.valid && this.form.get('userName').value === admin && this.form.get('password').value === admin) {
      this.subscription.add( this.loginPageService.login(this.form.get('userName').value, this.form.get('password').value)
        .pipe(first())
        .subscribe(
          data => {
            this.router.navigate(['secure' , {userName: this.form.get('userName').value}]);
          },
          error => {
            this.message = {
              status: error.status,
              description: error.message
            };
          }));
    } else {
      this.message.description = 'username or password is not valid';
    }
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}

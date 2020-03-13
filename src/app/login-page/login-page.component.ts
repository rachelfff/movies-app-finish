import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {LoginPageService} from './login-page.service';
import {Subscription} from 'rxjs';
import {Users} from './users';
import {Router} from '@angular/router';
const admin = 'admin';
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  form: FormGroup;
  subscription = new Subscription();
  submitted = false;
  constructor(private loginPageService: LoginPageService, private fb: FormBuilder , private router: Router) {
  }
  ngOnInit(): void {
    this.form = this.fb.group({
      userName: ['', [Validators.pattern('^[a-zA-Z ]+'), Validators.required, Validators.maxLength(20),]],
      password: ['', [Validators.pattern('^[a-zA-Z0-9 ]+'), Validators.required, Validators.maxLength(20),]]
    });
  }

  // checkUserExits(): boolean {
  //   let isUser = null;
  //   this.subscription.add(
  //     this.loginPageService.getUsersList().subscribe((users: Users) => {
  //         isUser =
  //     }));
  //   return isUser;
  // }

  formSubmitted() {
    this.submitted = true;
    // const isUser = this.checkUserExits();
    if (this.form.valid && this.form.get('password').value === admin && this.form.get('password').value === admin) {
      this.router.navigateByUrl('secure');
      // this.router.navigate(['secure']);
    }
    }
}

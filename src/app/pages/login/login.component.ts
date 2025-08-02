declare var google: any;
import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  users: any[] = [];
  router1=inject(Router)
  signupobjects: any = {
    email: '',
    pass: '',
  };
  loginobject: any = {
    email: '',
    pass: '',
  };
binding: any;
  constructor(private router: Router) {}
  ngOnInit(): void {
    const localData = localStorage.getItem('users');
    if (localData != null) {
      this.users = JSON.parse(localData);
    }
  }
  onSignUp() {
    this.users.push(this.signupobjects);
    localStorage.setItem('users', JSON.stringify(this.users));
    this.signupobjects = {
      email: '',
      pass: '',
    };
  }
  onLogin() {
    const isUserFound = this.users.find(
      (m) =>
        m.email == this.loginobject.email && m.pass == this.loginobject.pass
    );
    if (isUserFound != undefined) {
      alert('User login successfully');
      this.router1.navigate(['/browse'])
    } else {
      alert('wrong input');
    }
  }
}

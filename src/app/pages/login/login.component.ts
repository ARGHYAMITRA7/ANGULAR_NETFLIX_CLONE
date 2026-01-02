declare var google: any;
import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  users: any[] = [];
  router1 = inject(Router);
  
  // Tab state
  isLoginTab = true;
  
  // Message state
  successMessage = '';
  errorMessage = '';
  
  signupobjects: any = {
    email: '',
    password: '',
    confirmPassword: '',
  };
  
  loginobject: any = {
    email: '',
    password: '',
  };

  constructor(private router: Router) {}
  
  ngOnInit(): void {
    const localData = localStorage.getItem('users');
    if (localData != null) {
      this.users = JSON.parse(localData);
    }
  }

  switchTab(isLogin: boolean): void {
    this.isLoginTab = isLogin;
    this.clearMessages();
  }

  clearMessages(): void {
    this.successMessage = '';
    this.errorMessage = '';
  }

  showMessage(message: string, isSuccess: boolean): void {
    if (isSuccess) {
      this.successMessage = message;
      this.errorMessage = '';
    } else {
      this.errorMessage = message;
      this.successMessage = '';
    }
    // Auto-hide message after 4 seconds
    setTimeout(() => {
      this.successMessage = '';
      this.errorMessage = '';
    }, 4000);
  }

  onSignUp(): void {
    // Validation
    if (!this.signupobjects.email || !this.signupobjects.password || !this.signupobjects.confirmPassword) {
      this.showMessage('Please fill in all fields', false);
      return;
    }

    if (this.signupobjects.password !== this.signupobjects.confirmPassword) {
      this.showMessage('Passwords do not match', false);
      return;
    }

    if (this.signupobjects.password.length < 6) {
      this.showMessage('Password must be at least 6 characters', false);
      return;
    }

    // Check if email already exists
    const emailExists = this.users.find((user) => user.email === this.signupobjects.email);
    if (emailExists) {
      this.showMessage('Email already registered', false);
      return;
    }

    // Add new user
    const newUser = {
      email: this.signupobjects.email,
      password: this.signupobjects.password,
    };
    
    this.users.push(newUser);
    localStorage.setItem('users', JSON.stringify(this.users));
    
    this.showMessage('Account created successfully! Please log in.', true);
    
    // Clear form
    this.signupobjects = {
      email: '',
      password: '',
      confirmPassword: '',
    };

    // Switch to login tab after 2 seconds
    setTimeout(() => {
      this.isLoginTab = true;
    }, 2000);
  }

  onLogin(): void {
    // Validation
    if (!this.loginobject.email || !this.loginobject.password) {
      this.showMessage('Please fill in all fields', false);
      return;
    }

    const isUserFound = this.users.find(
      (user) =>
        user.email === this.loginobject.email && user.password === this.loginobject.password
    );

    if (isUserFound != undefined) {
      this.showMessage('Login successful! Redirecting...', true);
      
      // Clear form
      this.loginobject = {
        email: '',
        password: '',
      };

      // Navigate after message shows
      setTimeout(() => {
        this.router1.navigate(['/browse']);
      }, 1500);
    } else {
      this.showMessage('Invalid email or password', false);
    }
  }
}


import { Component, inject,computed, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../auth.service';
@Component({
  selector: 'app-signin',
  imports: [ReactiveFormsModule,RouterLink ],
  templateUrl: './signin.html',
  styleUrl: './signin.css',
})
export class Signin {
private fb = inject(FormBuilder);
  private router = inject(Router);

  private authService = inject(AuthService);
  

  isSignup = computed(() => this.router.url.includes('signup'));


  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  });

  signupForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  });

  onSignup() {
    if (this.signupForm.valid) {
      console.log('Creating Account...', this.signupForm.value);
      
      this.router.navigate(['/signin']); 
      
    }
  }

  onSubmit() {
    if (this.isSignup()) {
      if (this.signupForm.valid) {
        console.log('Signup Data:', this.signupForm.value);
        this.router.navigate(['/signin']);

      }
    } else {
      if (this.loginForm.valid) {
        console.log('Login Data:', this.loginForm.value);
        this.authService.login();
        this.router.navigate(['/makeup/face-primer']);
       
      }
    }
  }
}

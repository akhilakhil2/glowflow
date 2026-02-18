
import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 
  signedIn = signal(false);

  login() {
    this.signedIn.set(true);
  }

  logout() {
    this.signedIn.set(false);
  }
}
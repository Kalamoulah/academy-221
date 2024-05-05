import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Router } from '@angular/router';

const TOKEN_KEY = 'authToken';
const USER_KEY = 'user';
const EMAIL_KEY = 'email';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private localStorageService : LocalStorageService,
    private router:Router
  ) { }

  resetPassword(){
    console.log('reset password');
  }

  sendMailVerify(){
    console.log('send mail verify');
  }

  confirmationEmail(){
    console.log('confirmation email');
  }

  forgotPassword(){
    console.log('forgot password');
  }

  userProfile(){
    console.log('user profile');

  }

  changePassword(){
    console.log('change password');

  }

  saveEmailforUpdatePassword(email:string){
    this.localStorageService.save(EMAIL_KEY, email);
  }

  getEmailforUpdatePassword(){
    return this.localStorageService.get(EMAIL_KEY);
  }

  login(credentials:any ): Observable<any> {
    return this.http.post<any>(`${environment.url}login`,credentials);
  }

  saveToken(token : string) : void {
    this.localStorageService.save(TOKEN_KEY, token);
  }

  getToken() : string | null {
    return this.localStorageService.get(TOKEN_KEY);
  }

  getUser() : string | null {
    return this.localStorageService.get(USER_KEY);
  }

  saveUser(token : string) : void {
    this.localStorageService.save(USER_KEY, token);
  }

  deleteToken() : void {
    this.localStorageService.remove(TOKEN_KEY);
  }

  logout() {
    this.localStorageService.removeAll();
  }

  setUser(user:any){
    localStorage.setItem(USER_KEY,JSON.stringify(user));
  }

  getConnected(): any {
    const user = localStorage.getItem(USER_KEY);
    if (user) {
      return JSON.parse(user);
    }
    return null;
  }

  clearTokenExpired()
  {
    localStorage.removeItem(TOKEN_KEY);
    this.router.navigate(["/authentication/login"])
  }

}

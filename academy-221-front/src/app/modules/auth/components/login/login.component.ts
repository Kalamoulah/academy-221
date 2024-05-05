import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { tap } from 'rxjs';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm!: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.loginForm = this.fb.group({
      username: "",
      password: ""
    })
  }


  connexion() {
    const credentials = this.loginForm.value
     console.log(credentials);

     this.authService.login(credentials).pipe(
      tap({
        next: (res)=>{
        const  token = res.token
        const userConnected = JSON.stringify(res.user)
        const user = res.other.user
        console.log(user);

          this.authService.setUser(res.other.user);
          this.authService.saveToken(
            res.other.token
          );

          if (user?.role == "donneur") {
            this.router.navigate(['/home'])
            console.log('rp');
          }

          if (user?.role == "admin") {
            this.router.navigate(['/panel-admin-cnts'])
            console.log('rp');
          }

          if (user?.role == "organisation") {
            this.router.navigate(['home'])
          }

        },
        complete:()=>{
          console.log('observable terminé ');
        },
        error:(err)=>{
          console.error("Une erreur s'est produite :", err);
        }
      })
     ).subscribe()
  }
}

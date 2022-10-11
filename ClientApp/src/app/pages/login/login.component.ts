import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  public username: string;
  public password: string;

  public registerUsername: string;
  public registerPassword: string;
  public registerEmail: string;

  public errorMessage: string;
  public successMessage: string;
  public register: boolean = false;

  console = console;

  constructor(
    private router: Router,
    private auth: AuthServiceService,
    private userService: UserService
  ) {}
  authorization(form: NgForm) {
    if (form.valid) {
      this.auth
        .authenticate(this.username, this.password)
        .subscribe((response) => {
          if (response) {
            this.router.navigateByUrl('/info-page');
          } else {
            this.errorMessage = 'Uwierzytelnianie zakończone niepowodzeniem';
          }
        });
    } else {
      this.errorMessage = 'Niepawidłowe dane';
    }
  }

  clickRegisterButton() {
    this.register = !this.register;
    console.log(this.register);
  }

  registration(form: NgForm) {
    if (form.valid) {
      console.log('here');

      this.userService
        .register(
          this.registerUsername,
          this.registerEmail,
          this.registerPassword
        )
        .subscribe((response) => {
          this.console.log(response);
          if (response) {
            this.router.navigateByUrl('/login');
            this.successMessage = 'Poprawna rejestracja';
          } else {
            this.errorMessage = 'Rejestracja zakończona niepowodzeniem';
          }
        });
    } else {
      this.errorMessage = 'Niepawidłowe dane';
    }
  }
}

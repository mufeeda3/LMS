import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { LmsApiServiceService } from 'src/app/Shared/lms-api-service.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {

  public isLoading: boolean = false;
  public loginForm: FormGroup;
  public IsError: boolean = false;
  public ErrorMessage: string = "";

  constructor(public api: LmsApiServiceService,
    private router: Router,
    private route: ActivatedRoute,
    private builder: FormBuilder) {
    this.loginForm = this.builder.group({
      userEmail: ['', [Validators.required, Validators.email]],
      userPassword: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  Logged_Click() {
    this.isLoading = true;
    this.api.postUser("Login",
      {
        Email: this.loginForm.value.userEmail,
        Password: this.loginForm.value.userPassword
      }).subscribe(a => {
        console.debug(a);
        if (a.Success == false) {
          this.isLoading = false;
          this.ErrorMessage = a.Message;
        }
        else {
          this.api.userToken = a.UserToken;
          this.api.userName = a.UserName;
          this.api.userEmail = a.Email;
          this.api.userRole = a.UserRole;
          this.router.navigate(['/home']);
        }
      }, error => {
        console.debug(error);
        this.isLoading = false;
        this.ErrorMessage = "Server is not availabe, try again later";
        this.IsError = true;
      });
  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LmsApiServiceService } from 'src/app/Shared/lms-api-service.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

  public isLoading: boolean = false;
  public loginForm: FormGroup;
  public IsError: boolean = false;
  public ErrorMessage: string = "";

  constructor(public api: LmsApiServiceService,
    private router: Router,
    private route: ActivatedRoute,
    private builder: FormBuilder) {
    this.loginForm = this.builder.group({
      userName: ['', [Validators.required]],
      userEmail: ['', [Validators.required, Validators.email]],
      userPassword: ['', [Validators.required, Validators.minLength(6)]]
    });
  }


  ngOnInit(): void {

  }

  Register_Click() {
    this.isLoading = true;
    this.api.postUser("Register",
      {
        Name: this.loginForm.value.userName,
        Email: this.loginForm.value.userEmail,
        Password: this.loginForm.value.userPassword
      }).subscribe(a => {
        console.debug(a);
        if (a.Success == false) {
          this.isLoading = false;
          this.ErrorMessage = a.Message;
        }
        else this.router.navigate(['/auth']);
      }, error => {
        console.debug(error);
        this.isLoading = false;
        this.ErrorMessage = "Server is not availabe, try again later";
        this.IsError = true;
      });
  }
}

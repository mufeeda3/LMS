import { Component } from '@angular/core';
import { LmsApiServiceService } from './Shared/lms-api-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Online Library Management System';

  constructor(public api: LmsApiServiceService,
    private router: Router) {

  }

  UserInfo_Click() {
    this.router.navigate(['/userinfo']);
  }

  Logout_Click() {
    this.api.postUser("Logout", { Email: this.api.userEmail }).subscribe(a => {
      console.debug(a);
      if (a.Success == false) {
        // this.isLoading = false;
        // this.ErrorMessage = a.Message;
      }
      else {
        this.api.userEmail = '';
        this.api.userName = '';
        this.api.userToken = '';
        this.router.navigate(['/auth']);
      }
    }, error => {
      console.debug(error);
    });
  }
}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbAlertModule, NgbModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { LmsApiServiceService } from './Shared/lms-api-service.service';
import { UserLoginComponent } from './user/ui/user-login/user-login.component';
import { UserRegisterComponent } from './user/ui/user-register/user-register.component';
import { UserInfoComponent } from './user/ui/user-info/user-info.component';
import { LoadingIndicatorComponent } from './shared/ui/loading-indicator/loading-indicator.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BookInfoComponent } from './LMS/book-info/book-info.component';
import { BorrowedListComponent } from './LMS/borrowed-list/borrowed-list.component';
import { BookEditComponent } from './Admin/book-edit/book-edit.component';
import { UserListComponent } from './Admin/user-list/user-list.component';
import { UserEditComponent } from './Admin/user-edit/user-edit.component';
import { BookListComponent } from './Admin/book-list/book-list.component';
import { BooksSearchComponent } from './LMS/books-search/books-search.component';

@NgModule({
  declarations: [
    AppComponent,
    UserLoginComponent,
    UserRegisterComponent,
    UserInfoComponent,
    LoadingIndicatorComponent,
    BookListComponent,
    BookInfoComponent,
    BorrowedListComponent,
    BookEditComponent,
    UserListComponent,
    UserEditComponent,
    BooksSearchComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgbPaginationModule, 
    NgbAlertModule
  ],
  providers: [
    LmsApiServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

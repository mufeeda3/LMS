import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserLoginComponent } from './user/ui/user-login/user-login.component';
import { UserRegisterComponent } from './user/ui/user-register/user-register.component';
import { UserInfoComponent } from './user/ui/user-info/user-info.component';
import { BooksSearchComponent } from './LMS/books-search/books-search.component';
import { BorrowedListComponent } from './LMS/borrowed-list/borrowed-list.component';
import { BookInfoComponent } from './LMS/book-info/book-info.component';

const routes: Routes = [
  { path: 'auth', component: UserLoginComponent },
  { path: 'register', component: UserRegisterComponent },
  { path: 'userinfo', component: UserInfoComponent },

  { path: 'home', component: BooksSearchComponent },
  { path: "mybooks", component: BorrowedListComponent },
  { path: "bookinfo", component: BookInfoComponent },
  
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
  { path: '**', redirectTo: 'error', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

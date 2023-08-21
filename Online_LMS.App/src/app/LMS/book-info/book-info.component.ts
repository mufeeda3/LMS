import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { SearchResult } from '../Models/SearchResult';
import { LmsApiServiceService } from 'src/app/Shared/lms-api-service.service';
import { BorrowInfo } from '../Models/BorrowInfo';

@Component({
  selector: 'app-book-info',
  templateUrl: './book-info.component.html',
  styleUrls: ['./book-info.component.css']
})
export class BookInfoComponent implements OnInit {

  public CanBorrow: boolean = false;
  public Current: SearchResult = new SearchResult();
  public IsLoading: boolean = false;
  public IsError: boolean = false;
  public ErrorMessage: string = '';
  public Borrows: BorrowInfo[] = [];

  constructor(public api: LmsApiServiceService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => this.LoadBookDetails(params['id']));
  }

  LoadBookDetails(id: any) {
    console.debug(id);

    this.IsError = false;
    this.ErrorMessage = '';
    this.IsLoading = true;
    this.api.postLms("BookInfo",
      {
        UserId: this.api.userId,
        BookId: id
      }).subscribe(a => {
        console.debug(a);
        this.IsLoading = false;
        if (a.Success == false) {
          this.ErrorMessage = a.Message;
        }
        else {
          this.ParseData(a);
        }
      }, error => {
        console.debug(error);
        this.IsLoading = false;
        this.ErrorMessage = "Server is not availabe, try again later";
        this.IsError = true;
      });
  }

  ParseData(a: any) {
    let item = new SearchResult();
    if (a.Book) {
      item.Read(a.Book);
    }
    this.Current = item;

    let can_borrow = true;
    let borrows: BorrowInfo[] = [];
    if (a.Borrowed) {
      a.Borrowed.forEach((e: any) => {
        var borrow = new BorrowInfo();
        borrow.StartDate = e.StartDate;
        if (e.Active == true) {
          can_borrow = false;
          borrow.EndData = 'Not returned yet';
        }
        else {
          borrow.EndData = e.EndDate;
        }
        borrows.push(borrow);
      });
      this.Borrows = borrows;
    }
    this.CanBorrow = can_borrow;
  }

  BorrowBook_Click() {
    this.IsError = false;
    this.ErrorMessage = '';
    this.IsLoading = true;
    this.api.postLms("BorrowBook",
      {
        UserId: this.api.userId,
        BookId: this.Current.Id
      }).subscribe(a => {
        console.debug(a);
        this.IsLoading = false;
        if (a.Success == false) {
          this.ErrorMessage = a.Message;
        }
        else {
          this.ParseData(a);
        }
      }, error => {
        console.debug(error);
        this.IsLoading = false;
        this.ErrorMessage = "Server is not availabe, try again later";
        this.IsError = true;
      });

  }
}

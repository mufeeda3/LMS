import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { LmsApiServiceService } from 'src/app/Shared/lms-api-service.service';
import { SearchResult } from '../Models/SearchResult';

@Component({
  selector: 'app-books-search',
  templateUrl: './books-search.component.html',
  styleUrls: ['./books-search.component.css']
})
export class BooksSearchComponent {
  public IsError: boolean = false;
  public searchForm: FormGroup;
  public ErrorMessage: string = "";
  public IsLoading: boolean = false;
  public Current: SearchResult[] = [];

  constructor(public api: LmsApiServiceService, private router: Router,
    private route: ActivatedRoute,
    private builder: FormBuilder) {
    this.searchForm = this.builder.group({
      search: ['', [Validators.required, Validators.minLength(1)]]
    });
  }

  BorrowList_Click(){
    this.router.navigate(['/mybooks']);
  }

  Search_Click() {
    this.GetPageSearch(0);
  }

  GotoBook_Click(data: SearchResult) {
    this.router.navigate(['/bookinfo', { id: data.Id }]);
  }

  GetPageSearch(index: number) {
    this.IsError = false;
    this.ErrorMessage = '';
    this.IsLoading = true;
    this.api.postLms("SearchBooks",
      {
        Token: this.searchForm.value.search
      }).subscribe(a => {
        console.debug(a);
          this.IsLoading = false;
        if (a.Success == false) {
          this.ErrorMessage = a.Message;
        }
        else {
          let items:  SearchResult[] = [];
          if (a.Books && a.Books.length > 0) {
            a.Books.forEach((e: any) => {
              let item = new SearchResult();
              item.Read(e);
              items.push(item);
            });
          }
          this.Current = items;
        }
      }, error => {
        console.debug(error);
        this.IsLoading = false;
        this.ErrorMessage = "Server is not availabe, try again later";
        this.IsError = true;
      });
  }
}

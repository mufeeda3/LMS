import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { SearchResult } from '../Models/SearchResult';

@Component({
  selector: 'app-book-info',
  templateUrl: './book-info.component.html',
  styleUrls: ['./book-info.component.css']
})
export class BookInfoComponent implements OnInit {

  public CanBorrow: boolean = false;
  public Current: SearchResult = new SearchResult();
  public IsLoading: boolean = false;

  constructor(private route: ActivatedRoute) { }
  
  ngOnInit() {
    this.route.params.subscribe((params: Params) => this.LoadBookDetails(params['id']));
  }

  LoadBookDetails(id: any) {
    console.debug(id);
  }

  BorrowBook_Click() {
    
  }
}

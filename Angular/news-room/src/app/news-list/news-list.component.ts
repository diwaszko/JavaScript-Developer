import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit {
  news: string[];
  constructor() { }

  ngOnInit() {
    this.news = [
      '123',
      '23432',
      '434'
    ];
  }
  removeItem(i: number) {
    this.news.splice(i, 1);
  }
  addItem(title: string) {
    this.news.push(title);
  }
}

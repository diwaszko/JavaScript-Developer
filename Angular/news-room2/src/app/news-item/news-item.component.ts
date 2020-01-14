import {
  Component, OnInit, Input, EventEmitter, Output
} from '@angular/core';
import { NewsData } from '../news-data';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-news-item',
  templateUrl: './news-item.component.html',
  styleUrls: ['./news-item.component.css']
})
export class NewsItemComponent {
  @Input()
  public news: NewsData;

  @Input()
  public index: number;

  constructor(private newsService: NewsService) { }

  imageUrl = 'https://d-pt.ppstatic.pl/k/r/1/76/c4/5d164a4f796d2_p.jpg?1574765877';


  remove() {
    this.newsService.removeItem(this.index)
  }
}

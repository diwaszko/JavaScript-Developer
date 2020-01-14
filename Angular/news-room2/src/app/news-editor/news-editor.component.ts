import {
  Component, OnInit, EventEmitter, Output
} from '@angular/core';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-news-editor',
  templateUrl: './news-editor.component.html',
  styleUrls: ['./news-editor.component.css']
})
export class NewsEditorComponent implements OnInit {
  @Output()
  onAdd = new EventEmitter<string>();

  newTitle: string;

  constructor(private newsService: NewsService) { }

  ngOnInit() {
    this.newTitle = '123';
  }

  addNewItem() {
    if (this.newTitle) {
      this.newsService.addItem(this.newTitle);
      this.newTitle = '';
    }
  }
}

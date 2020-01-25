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
  newContent: string;
  newImage: string;
  counter: number;



  constructor(private newsService: NewsService) { }

  ngOnInit() {
    const newRandomImage = Math.floor(Math.random() * 50) + 1;

    this.newTitle = 'Tytuł komentarza';
    this.newContent = 'Treść twojego komentarza';
    this.newImage = `https://picsum.photos/id/${newRandomImage}/200/200`;
    this.counter = Math.floor(Math.random() * 15) - 5;
  }

  addNewItem() {
    const newRandomImage = Math.floor(Math.random() * 50) + 1;

    if (this.newTitle) {
      this.newsService.addItem(this.newTitle,this.newContent,this.newImage,this.counter);
      this.newTitle = '';
      this.newContent = '';
      this.newImage = `https://picsum.photos/id/${newRandomImage}/200/200`;
      this.counter = Math.floor(Math.random() * 15) - 5;
    }
  }
}

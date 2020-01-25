import { Injectable, EventEmitter } from '@angular/core';
import { NewsData } from './news-data';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  public onChange = new EventEmitter();

  private news: NewsData[] = [
    new NewsData('Lorem ipsum dolor', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'https://picsum.photos/id/101/200/200', Math.floor(Math.random() * 15) - 5),
    new NewsData('Ut enim ad minim veniam', ' Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ', 'https://picsum.photos/id/102/200/200', Math.floor(Math.random() * 15) - 5),
    new NewsData('Duis aute irure dolor', 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ', 'https://picsum.photos/id/103/200/200', Math.floor(Math.random() * 15) - 5)
  ];

  public getNewsList(): NewsData[] {
    return this.news.slice();   // tworzymy kopie tablicy (bez parametrów zwraca po prostu talbice), aby nie zwracać referencji, aby nie byla dostepna wszedzie (jest to bezpieczniejsze)
  }
  removeItem(i: number) {
    this.news.splice(i, 1);
    this.onChange.emit();
  }
  addItem(title: string, content: string, imageUrl: string,counter: number) {
    this.news.push(new NewsData(title,content,imageUrl,counter));

    this.onChange.emit();
  }
}


// polecenie utworzy ten plik news.service, ktory bedzie reużywalny (będzie logiką dla programu): ng generate service news
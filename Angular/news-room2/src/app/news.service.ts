import { Injectable, EventEmitter } from '@angular/core';
import { NewsData } from './news-data';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  public onChange = new EventEmitter();

  private news: NewsData[] = [
    new NewsData('123'),
    new NewsData('345'),
    new NewsData('sads')
  ];

  public getNewsList(): NewsData[] {
    return this.news.slice();   // tworzymy kopie tablicy (bez parametrów zwraca po prostu talbice), aby nie zwracać referencji, aby nie byla dostepna wszedzie (jest to bezpieczniejsze)
  }
  removeItem(i: number) {
    this.news.splice(i, 1);
    this.onChange.emit();
  }
  addItem(title: string) {
    this.news.push(new NewsData(title));
    this.onChange.emit();
  }
}


// polecenie utworzy ten plik news.service, ktory bedzie reużywalny (będzie logiką dla programu): ng generate service news
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core'; // EventEmmiter trzeba dodać, aby obsłużyć remove()

@Component({
  selector: 'app-news-item',
  templateUrl: './news-item.component.html',
  styleUrls: ['./news-item.component.css']
})
export class NewsItemComponent implements OnInit {
  @Input()                // określamy title jako Input i można użyć w news-list-component.html jako parametr [title]="'wartosc'"
  public title: string;   // można przypisać wartość: public title: string = 'test';

  @Output()                             // trzeba Output podczepić, aby dziecko z rodzicem mogli się skomunikować
  public onRemove = new EventEmitter(); // zdarzenie do usuwania elementu z listy
  constructor() { }

  ngOnInit() {
  }
  // podpięcie funkcji remove
  remove() {
    this.onRemove.emit();
  }
}

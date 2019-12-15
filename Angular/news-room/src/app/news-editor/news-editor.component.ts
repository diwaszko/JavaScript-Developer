import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-news-editor',
  templateUrl: './news-editor.component.html',
  styleUrls: ['./news-editor.component.css']
})
export class NewsEditorComponent implements OnInit {
  @Output()
  onAdd = new EventEmitter<string>();

  newTitle: string;
  constructor() { }

  ngOnInit() {
    this.newTitle = '123';      // domyślny tekst
  }

  addNewItem() {   // tworzenie metody do wyświetlenia w news-editor.html
    if (this.newTitle) {    // zabezpieczenie przed dodawanie pustego elementu
      this.onAdd.emit(this.newTitle);
      this.newTitle = '';       // czyszczenie pola po dodaniu elmentu
    }
  }
}

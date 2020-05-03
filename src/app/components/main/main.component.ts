import { Component, OnInit } from '@angular/core';
import { Column } from 'src/app/models/column.model';
import { Board } from 'src/app/models/board.model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor() { }

  board: Board = new Board('Test Board', [
    new Column('Ideas', [
      "Random idea",
      "Another idea",
      "Awful Idea"
    ]),
    new Column('Research', [
      "Search this",
      "And search that",
      "And prove this"
    ]),
    new Column('Todo', [
      "Set alarm",
      "Cook something",
      "Learn to code"
    ]),
    new Column('Done', [
      "Nothing",
      "Absolutely nosense",
      "Wasted time"
    ])
  ]);

  ngOnInit(): void {
  }

}

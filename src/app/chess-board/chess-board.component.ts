import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chess-board',
  templateUrl: './chess-board.component.html',
  styleUrls: ['./chess-board.component.css'],
})
export class ChessBoardComponent implements OnInit {
  board: number[][] = [
    [1, 2, 3, 4, 5, 6, 7, 8],
    [1, 2, 3, 4, 5, 6, 7, 8],
    [1, 2, 3, 4, 5, 6, 7, 8],
    [1, 2, 3, 4, 5, 6, 7, 8],
    [1, 2, 3, 4, 5, 6, 7, 8],
    [1, 2, 3, 4, 5, 6, 7, 8],
    [1, 2, 3, 4, 5, 6, 7, 8],
    [1, 2, 3, 4, 5, 6, 7, 8],
  ];

  selected = {
    x: 4,
    y: 4,
  };

  onOff: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  clickCon(x: number, y: number) {
    if (this.selected.x === x && this.selected.y === y) {
      this.onOff = !this.onOff;
    }

    if (
      (this.onOff && this.selected.x === x - 2 && this.selected.y === y + 1) ||
      (this.onOff && this.selected.x === x - 1 && this.selected.y === y + 2) ||
      (this.onOff && this.selected.x === x + 2 && this.selected.y === y + 1) ||
      (this.onOff && this.selected.x === x + 1 && this.selected.y === y + 2) ||
      (this.onOff && this.selected.x === x - 2 && this.selected.y === y - 1) ||
      (this.onOff && this.selected.x === x - 1 && this.selected.y === y - 2) ||
      (this.onOff && this.selected.x === x + 2 && this.selected.y === y - 1) ||
      (this.onOff && this.selected.x === x + 1 && this.selected.y === y - 2)
    ) {
      this.selected = {
        x,
        y,
      };
      this.onOff = false;
    }
  }
}

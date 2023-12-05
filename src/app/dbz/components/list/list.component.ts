import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input()
  public characterList: Character[] = [];


  @Output()
  public onDeleteID:EventEmitter<string> = new EventEmitter();

  public deleteCharacter(id?: string): void {
    if (!id) {
      return;
    }
    this.onDeleteID.emit(id);
  }
}


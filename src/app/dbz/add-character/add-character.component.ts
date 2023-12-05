import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { Character } from '../interfaces/character.interface';
@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  public newCharacter: Character = {
    name: '',
    power: 0,
  };

  private resetCharacter(): void {
    this.newCharacter = {
      name: '',
      power: 0,
    };
  }

  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();


  public emitCharacter(): void {
    if (this.newCharacter.name.trim().length === 0) {
      return;
    }
    this.onNewCharacter.emit(this.newCharacter);
    this.resetCharacter();
  }
}

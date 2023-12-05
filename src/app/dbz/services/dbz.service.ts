import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';

import { Character } from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  constructor() { }
  public character: Character[] = [
    {
      id: uuid(),
      name:'Goku',
      power: 9500
    },
    {
      id: uuid(),
      name: 'Vegeta',
      power: 1000
    },
    {
      id: uuid(),
      name: 'Krillin',
      power: 700
    }
  ];

  public addCharacter(character: Character): void {
    character.id = uuid();
    this.character.push(character);
  }

  public deleteCharacter(id: string): void {
    this.character = this.character.filter(character => character.id !== id); }
}

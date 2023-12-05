import { Component } from '@angular/core';

import { DbzService } from '../services/dbz.service';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'dbz-main-page',
  templateUrl: 'main-page.component.html'
})

export class MainPageComponent{
  constructor(private dbzService: DbzService) { }

  get characterList(): Character[] {
    return [...this.dbzService.character];
  }

  public deleteCharacter(id: string): void {
    this.dbzService.deleteCharacter(id);
  }

  public addCharacter(character: Character): void {
    this.dbzService.addCharacter(character);
  }
}

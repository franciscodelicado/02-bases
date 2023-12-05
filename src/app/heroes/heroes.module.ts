import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HeroComponent } from "./components/hero/hero.component";
import { ListComponent } from "./components/list/list.component";


@NgModule({
  declarations: [
    // Components
    HeroComponent,
    ListComponent
  ],
  imports: [
    // Modules
    CommonModule,
  ],
  exports: [
    // Components
    HeroComponent,
    ListComponent
  ]
})
export class HeroesModule {}


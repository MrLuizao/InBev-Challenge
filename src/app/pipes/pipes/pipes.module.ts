import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchHeroPipe } from '../search-hero.pipe';

@NgModule({
  declarations: [SearchHeroPipe],
  exports: [SearchHeroPipe],
  imports: [
    CommonModule
  ]
})

export class PipesModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardListComponent } from './card-list/card-list.component';
import { PipesModule } from '../pipes/pipes/pipes.module';

@NgModule({
  declarations: [ CardListComponent ],
  exports: [ CardListComponent ],
  imports: [
    CommonModule,
    PipesModule
  ]
})
export class ComponentsModule { }

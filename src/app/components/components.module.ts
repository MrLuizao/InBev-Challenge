import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardListComponent } from './card-list/card-list.component';
import { PipesModule } from '../pipes/pipes/pipes.module';
import { LoaderComponent } from './loader/loader.component';

@NgModule({
  declarations: [ 
    CardListComponent, 
    LoaderComponent 
  ],
  exports: [ 
    CardListComponent, 
    LoaderComponent 
  ],
  imports: [
    CommonModule,
    PipesModule
  ]
})
export class ComponentsModule { }

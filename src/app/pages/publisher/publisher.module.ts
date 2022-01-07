import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PublisherPageRoutingModule } from './publisher-routing.module';
import { PublisherPage } from './publisher.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PublisherPageRoutingModule,
    ComponentsModule
  ],
  declarations: [PublisherPage]
})
export class PublisherPageModule {}

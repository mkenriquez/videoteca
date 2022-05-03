import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { SlidesBackdropComponent } from './slides-backdrop/slides-backdrop.component';
import { PipesModule } from '../pipes/pipes.module';
import { SlidesPosterComponent } from './slides-poster/slides-poster.component';
import { DetailsComponent } from './details/details.component';



@NgModule({
  declarations: [
    SlidesBackdropComponent,
    SlidesPosterComponent,
    DetailsComponent
  ],
  exports: [
    SlidesBackdropComponent,
     SlidesPosterComponent,
     DetailsComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    PipesModule
  ]
})
export class ComponentsModule { }
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { SlidesBackdropComponent } from './slides-backdrop/slides-backdrop.component';
import { ImagenPipe } from '../pipes/imagen.pipe';



@NgModule({
  declarations: [
    SlidesBackdropComponent
  ],
  exports:[
    SlidesBackdropComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    ImagenPipe
  ]
})
export class ComponentsModule { }

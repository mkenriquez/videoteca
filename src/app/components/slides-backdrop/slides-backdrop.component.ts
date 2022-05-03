import { Component, Input, OnInit } from '@angular/core';
import { Movies } from 'src/app/interfaces/interfaces';
import { ModalController } from '@ionic/angular';
import { DetailsComponent } from '../details/details.component';

@Component({
  selector: 'app-slides-backdrop',
  templateUrl: './slides-backdrop.component.html',
  styleUrls: ['./slides-backdrop.component.scss'],
})
export class SlidesBackdropComponent implements OnInit {

  @Input() discover: Movies[] = [];

  constructor( private modalController: ModalController) { }

  ngOnInit() {}

  async showDetails(id: number){
     
     const modal = await this.modalController.create({
          component: DetailsComponent,
          componentProps: {
            id
          }
     });
     modal.present();

     
     //console.log(id);
  }
}

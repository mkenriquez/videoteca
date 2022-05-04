import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Movies } from 'src/app/interfaces/interfaces';
import { DetailsComponent } from '../details/details.component';

@Component({
  selector: 'app-slides-poster',
  templateUrl: './slides-poster.component.html',
  styleUrls: ['./slides-poster.component.scss'],
})
export class SlidesPosterComponent implements OnInit {

  @Input() discover: Movies[] = [];
  @Input() title: string='';
  constructor(private modalController: ModalController) { }

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

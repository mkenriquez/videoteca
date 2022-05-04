import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Cast, ResultDetails } from 'src/app/interfaces/interfaces';
import { DataMoviesService } from 'src/app/services/data-movies.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {

    @Input() id = 0;
    details: ResultDetails = {};
    credits: Cast[] = [];


    constructor(private dataMovies: DataMoviesService, private modalController: ModalController) { }

  ngOnInit() {
      //console.log(this.id);

      this.dataMovies.getDetails(this.id).subscribe(
        resp =>{
         console.log(resp);

         this.details = resp;

        });


        this.dataMovies.getCredits(this.id).subscribe(
          resp =>{

            this.credits = resp.cast;
            console.log(resp);
          });

  }

    cerrar(){
        this.modalController.dismiss();
    }  
}

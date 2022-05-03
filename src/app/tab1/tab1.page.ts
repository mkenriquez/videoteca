import { Component } from '@angular/core';
import { Movies, ResultTMDB } from '../interfaces/interfaces';
import { DataMoviesService } from '../services/data-movies.service';
//AQUI SE CONSUME EL SERVICIO , SI LO NECESITA PARA MANDARLO AL COMPONENTE.
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  discover: Movies[] = [];

  popularity: Movies[] = [];

  constructor(private dataMovies: DataMoviesService) {}

  ngOnInit(): void{
    this.dataMovies.getDiscover().
    subscribe(
      resp => {
       // console.log(resp)
        this.discover = resp.results;
      });


      this.dataMovies.getPopularity().
    subscribe(
      resp => {
       // console.log(resp)
        this.popularity = resp.results;
      });
  }

}

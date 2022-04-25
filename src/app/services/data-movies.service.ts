import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ResultTMDB } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class DataMoviesService {

  constructor(private http: HttpClient) { }

  getDiscover() {

    //primer cambio return this.http.get('https://api.themoviedb.org/3/discover/movie?api_key=ab4c7f325d588c10b01034205f2d91ec&language=es&primary_release_date.gte=2022-03-01&primary_release_date.lte=2022-03-31')
    //segundo camio
    return this.http.get<ResultTMDB>('https://api.themoviedb.org/3/discover/movie?api_key=ab4c7f325d588c10b01034205f2d91ec&language=es&primary_release_date.gte=2022-03-01&primary_release_date.lte=2022-03-31')
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ResultTMDB } from '../interfaces/interfaces';
import { environment } from 'src/environments/environment';

//Constantes traidas de environment 

const URL = environment.URL;
const API_KEY = environment.API_KEY;

@Injectable({
  providedIn: 'root'
})
export class DataMoviesService {

  constructor(private http: HttpClient) { }

  //resive cualquier tipo de objeto del api  y provee del servicio
  private execQuery<T> (query: string){

    // es diferente al de abajo porque ... ' url + variable'
    query = URL + query;  //https://api.themoviedb.org/3/discover/movie

    // += es para concatena la query + otra cosa , se le agrega '&' por
    query += `&api_key=${API_KEY}&language=es`  // 'https://api.themoviedb.org/3/discover/movie?api_key=ab4c7f325d588c10b01034205f2d91ec&language=es&primary_release_date.gte=2022-03-01&primary_release_date.lte=2022-03-31
  
    return this.http.get<T>(query);
  }

  getDiscover() {

        //primer cambio basico de api
        // return this.http.get('https://api.themoviedb.org/3/discover/movie?api_key=ab4c7f325d588c10b01034205f2d91ec&language=es&primary_release_date.gte=2022-03-01&primary_release_date.lte=2022-03-31')
        
        //segundo cambio trallendo el json to ts
        //return this.http.get<ResultTMDB>('https://api.themoviedb.org/3/discover/movie?api_key=ab4c7f325d588c10b01034205f2d91ec&language=es&primary_release_date.gte=2022-03-01&primary_release_date.lte=2022-03-31')
      
    //tercer cambio : invocar al metodo execQuery + url constante? atributos 
    //return  this.execQuery<ResultTMDB>('/discover/movie?primary_release_date.gte=2022-03-01&primary_release_date.lte=2022-03-31');
    
          // urls de get
          //primer variable inicia con ? las demas se conectan con &

    
      //automatizar las fechas...

          const fechaActual = new Date();
          const ultimoDia = new Date(fechaActual.getFullYear() ,fechaActual.getMonth() +1 , 0).getDate();
          const mes = fechaActual.getMonth()+1;

          //let cambia el valor
          let mesString;

          //validacion para trer el 0+numero de mes y sean dos digitos.

          if(mes < 10)
            { 
                mesString = '0'+ mes;
            } 
            else {
              mesString = mes;
            }

            //constantes para la fecha
            // `` <-- backtip , los get son metodos llevan ()
            const fecInicio = `${fechaActual.getFullYear()}-${mesString}-01`;
            const fecFin = `${fechaActual.getFullYear()}-${mesString}-${ultimoDia}`;
          
            // cuarto cambio , se agrega la automatizacion de fechas
    return  this.execQuery<ResultTMDB>(`/discover/movie?primary_release_date.gte=${fecInicio}&primary_release_date.lte=${fecFin}`);
      

          }
}

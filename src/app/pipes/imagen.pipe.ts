import { Pipe, PipeTransform } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
//SOLO RUTA ENVIRONMENT NO ENVIRONMEN.PRO
const URL = environment.URL_PATH;

@Pipe({
  name: 'imagen'
})


export class ImagenPipe implements PipeTransform {

  transform(img: string, size: string ='w500' ): string {
    if(!img){
      return;
    }
      
    
    const urlImg =`${URL }/${ size}${ img }`;

    return urlImg;
  }

}

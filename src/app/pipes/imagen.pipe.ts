import { Pipe, PipeTransform } from '@angular/core';


const URL_PATH = 'https://image.tmdb.org/t/p/w500/kqjL17yufvn9OVLyXYpvtyrFfak.jpg';
@Pipe({
  name: 'imagen'
})


export class ImagenPipe implements PipeTransform {

  transform(img: string, size: string ='w500' ): unknown {
    if(!img){
      return;
    }
      
    
    const urlImg =`${URL }/${ size}${ img }`;

    return urlImg;
  }

}

import { Component, Input, OnInit } from '@angular/core';
import { Movies } from 'src/app/interfaces/interfaces';
@Component({
  selector: 'app-slides-poster',
  templateUrl: './slides-poster.component.html',
  styleUrls: ['./slides-poster.component.scss'],
})
export class SlidesPosterComponent implements OnInit {

  @Input() discover: Movies[] = [];
  @Input() title: string='';
  constructor() { }

  ngOnInit() {}

}

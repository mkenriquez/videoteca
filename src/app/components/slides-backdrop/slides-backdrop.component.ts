import { Component, Input, OnInit } from '@angular/core';
import { Movies } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-slides-backdrop',
  templateUrl: './slides-backdrop.component.html',
  styleUrls: ['./slides-backdrop.component.scss'],
})
export class SlidesBackdropComponent implements OnInit {

  @Input() discover: Movies[] = [];
  constructor() { }

  ngOnInit() {}

}

import { Component, Input, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CarouselOptions } from 'src/app/core/constants/carousel-constants';

@Component({
  selector: 'carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  @Input() options: OwlOptions = CarouselOptions
  @Input() data: any[]=[]
  constructor() { }

  ngOnInit() {
  }

}

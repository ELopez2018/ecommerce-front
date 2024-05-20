import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent implements OnInit {
  @Input() rating: number = 5
  public starts: any[] = []
  constructor() {
  }

  ngOnInit() {
    for (let i = 0; i < this.rating; i++) {
      this.starts.push(this.rating)
    }
  }

}

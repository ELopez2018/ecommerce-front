import { Component, OnInit } from '@angular/core';
import { Company } from 'src/app/core/interfaces/company';
import { DataService } from '../../../core/services/data/data.service';

@Component({
  selector: 'sub-header',
  templateUrl: './sub-header.component.html',
  styleUrls: ['./sub-header.component.scss']
})
export class SubHeaderComponent implements OnInit {
  public company!: Company;
  constructor(private dataService: DataService) {
    this.subcriptionToData()
  }

  ngOnInit() {
  }
  subcriptionToData() {
    this.dataService.getCompany$()
      .subscribe(data => {
        this.company = data;
      })
  }
}

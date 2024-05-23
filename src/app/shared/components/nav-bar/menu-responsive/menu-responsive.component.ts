import { Component, OnInit } from '@angular/core';
import { Company } from 'src/app/core/interfaces/company';
import { DataService } from 'src/app/core/services/data/data.service';
import { CompaniesMock } from 'src/app/pages/companies/mocks/companies-mock';

@Component({
  selector: 'menu-responsive',
  templateUrl: './menu-responsive.component.html',
  styleUrls: ['./menu-responsive.component.scss']
})
export class MenuResponsiveComponent implements OnInit {

  menus = CompaniesMock
  constructor( private dataService:DataService ) { }

  ngOnInit() {
  }

  setCompnay(company: Company){
    this.dataService.setCompany(company)
  }

}

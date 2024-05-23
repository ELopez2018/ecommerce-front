import { Component, Input, OnInit } from '@angular/core';
import { Company } from 'src/app/core/interfaces/company';
import { CompaniesMock } from 'src/app/pages/companies/mocks/companies-mock';
import { DataService } from '../../../../core/services/data/data.service';

@Component({
  selector: 'menu-desktop',
  templateUrl: './menu-desktop.component.html',
  styleUrls: ['./menu-desktop.component.scss']
})
export class MenuDesktopComponent implements OnInit {
  menus = CompaniesMock
  constructor( private dataService:DataService ) { }

  ngOnInit() {
  }

  setCompnay(company: Company){
    this.dataService.setCompany(company)
  }
}

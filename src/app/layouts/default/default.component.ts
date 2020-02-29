import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {

   sideMenu=false;
  constructor() { }

  ngOnInit(): void {
  }

  onTogglesideBar(event){
    this.sideMenu=!this.sideMenu;
  }

}

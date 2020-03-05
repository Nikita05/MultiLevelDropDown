import { Component, OnInit } from '@angular/core';
import { navJSON } from '../navJSON';
import { NavItem } from '../NavItem';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  navItemsData = navJSON;
  showMenu:Boolean=false;

  constructor() { }

  ngOnInit() { }

  openMenu(){
    this.showMenu=!this.showMenu;
  }

  getSelectedItem(selectedItem){
    alert("You selected" + selectedItem);
  }
}

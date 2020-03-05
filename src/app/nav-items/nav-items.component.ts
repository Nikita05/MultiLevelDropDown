import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import { NavItem } from '../NavItem';
import { element } from 'protractor';


@Component({
  selector: 'app-nav-items',
  templateUrl: './nav-items.component.html',
  styleUrls: ['./nav-items.component.css']
})
export class NavItemsComponent implements OnInit {

  @Input()  navSubItems:NavItem[];

  subMenuItem = false;
  @Output() selectedItem = new EventEmitter();

  arrow=">";

  constructor() { }

  ngOnInit() {
    console.log(this.navSubItems,"app-nav-items")
    // this.navItems.forEach(element => {
    //   if (typeof(element.Items)=="object"){
    //     this.subMenuItem = true;
    //     console.log(this.subMenuItem,"subMenuItem")
    //   }
    // });    
  }

  clicked(id){
    this.selectedItem.emit(id);
    console.log("clicked"+id);
  }

}

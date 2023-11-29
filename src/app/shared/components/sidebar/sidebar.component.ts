import { Component } from '@angular/core';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

  public menuItems = [
    { path:'', label:'Home'},
    // { path:'about', label:'About'},
    // { path:'contact', label:'Contact'},

    { path:'countries/by-capital', label:'By Capital'},
    { path:'countries/by-region', label:'By Region'},
    { path:'countries/by-country', label:'By Country'},
    // { path:'countries/by', label:'Country'},

  ]

}

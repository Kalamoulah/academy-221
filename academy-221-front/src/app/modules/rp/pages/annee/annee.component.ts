import { Component } from '@angular/core';

@Component({
  selector: 'app-annee',
  templateUrl: './annee.component.html',
  styleUrls: ['./annee.component.css']
})
export class AnneeComponent {
  
 openDrawer: boolean = false;
//  closeDrawer: boolean = false;

 onButtoonDrawerClicked(){
    this.openDrawer = !this.openDrawer
 }
 
}

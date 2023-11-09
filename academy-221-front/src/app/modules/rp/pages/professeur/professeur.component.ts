import { Component } from '@angular/core';

@Component({
  selector: 'app-professeur',
  templateUrl: './professeur.component.html',
  styleUrls: ['./professeur.component.css']
})
export class ProfesseurComponent {


  openDrawer: boolean = false;
  //  closeDrawer: boolean = false;
  
   onButtoonDrawerClicked(){
      this.openDrawer = !this.openDrawer
   }
}

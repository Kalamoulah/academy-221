import { Component } from '@angular/core';

@Component({
  selector: 'app-salle',
  templateUrl: './salle.component.html',
  styleUrls: ['./salle.component.css']
})
export class SalleComponent {
   openModal :boolean = false;

   onclicled(){
    this.openModal = !this.openModal
   }
}

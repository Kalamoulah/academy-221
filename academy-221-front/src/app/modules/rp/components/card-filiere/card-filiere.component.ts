import { Component, Input } from '@angular/core';
import { SharedInterface } from 'src/app/interface/abstract';

@Component({
  selector: 'app-card-filiere',
  templateUrl: './card-filiere.component.html',
  styleUrls: ['./card-filiere.component.css']
})
export class CardFiliereComponent {
  @Input() filiere!: SharedInterface ;
}

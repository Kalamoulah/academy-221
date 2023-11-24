import { Component, Input } from '@angular/core';
import { Salle } from 'src/app/interface/salle';

@Component({
  selector: 'app-card-salle',
  templateUrl: './card-salle.component.html',
  styleUrls: ['./card-salle.component.css']
})
export class CardSalleComponent {
  @Input() salle!: Salle ;
}

import { Component, Input } from '@angular/core';
import { AnneeScolaireInterface } from 'src/app/interface/abstract';

@Component({
  selector: 'app-card-annee',
  templateUrl: './card-annee.component.html',
  styleUrls: ['./card-annee.component.css']
})
export class CardAnneeComponent {
  @Input() annee!: AnneeScolaireInterface ;
}

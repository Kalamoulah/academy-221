import { Component, Input } from '@angular/core';
import { ClasseInterface } from 'src/app/interface/abstract';

@Component({
  selector: 'app-card-classe',
  templateUrl: './card-classe.component.html',
  styleUrls: ['./card-classe.component.css']
})
export class CardClasseComponent {
  @Input() classe!: ClasseInterface ;
}

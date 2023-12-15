import { Component, Input } from '@angular/core';
import { ModuleInterface } from 'src/app/interface/abstract';

@Component({
  selector: 'app-card-module',
  templateUrl: './card-module.component.html',
  styleUrls: ['./card-module.component.css']
})

export class CardModuleComponent {
  @Input() module!: ModuleInterface ;
}

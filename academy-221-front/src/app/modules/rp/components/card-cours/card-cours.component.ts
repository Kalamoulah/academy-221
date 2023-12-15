import { Component, Input } from '@angular/core';
import { Cours } from 'src/app/interface/abstract';

@Component({
  selector: 'app-card-cours',
  templateUrl: './card-cours.component.html',
  styleUrls: ['./card-cours.component.css']
})
export class CardCoursComponent {
  @Input() course!: Cours ;

  calculateProgress(): number {
    const heureEcoule = parseFloat(this.course.heure_ecoule) || 0;
    const heureGlobal = parseFloat(this.course.heure_global) || 1; // évite une division par zéro

    return (heureEcoule / heureGlobal) * 100;
  }

  isFullWidth(): boolean {
    const heureEcoule = parseFloat(this.course.heure_ecoule) || 0;
    const heureGlobal = parseFloat(this.course.heure_global) || 1;
    return (heureEcoule / heureGlobal) >= 1;
  }

}

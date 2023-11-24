import { Component } from '@angular/core';
import {  AnneePostInterface, AnneeScolaireInterface, ClasseInterface, SharedInterface } from 'src/app/interface/abstract';
import { SemestreService } from '../../services/semestre.service';
import { tap } from 'rxjs';
import { ClasseService } from '../../services/classe.service';
import Swal from 'sweetalert2';
import { AnneeScolaireService } from '../../services/annee-scolaire.service';

@Component({
  selector: 'app-annee',
  templateUrl: './annee.component.html',
  styleUrls: ['./annee.component.css']
})
export class AnneeComponent {
  
 openDrawer: boolean = false;
//  closeDrawer: boolean = false;


semestreSelected!: SharedInterface[]
 allsemestre!:SharedInterface[]
 classeSelected!: ClasseInterface[]
 allClasse!:ClasseInterface[]
 allAnneeScolaire!:AnneeScolaireInterface[]
 libelle:string = ""
 data! :AnneePostInterface
 constructor( private _semestreService: SemestreService,private _classeService: ClasseService, private _anneeScolaireService: AnneeScolaireService){}

 ngOnInit(){
   this.allsemestreData()
   this.allClasseData()
   this.allAnneeScolaireData()
 }

 onButtoonDrawerClicked(){
  this.openDrawer = !this.openDrawer
}

 allsemestreData(){
   this._semestreService.all().pipe(
     tap({
       next:(res)=>{
         console.log(res.data);
         if (res.data[0].length == 0) {
           console.log('breukh');  
         }else{
           this.allsemestre = res.data  
         }
       },
       complete: () => {
         console.log('observable terminer 🚀');
       },
       error: (err) => {
         console.error(err);
       },
     })
   ).subscribe()
}


allClasseData(){
  this._classeService.all().pipe(
    tap({
      next:(res)=>{
        console.log(res.data);
        if (res.data[0].length == 0) {
          console.log('breukh');  
        }else{
          this.allClasse = res.data  
        }
      },
      complete: () => {
        console.log('observable terminer 🚀');
      },
      error: (err) => {
        console.error(err);
      },
    })
  ).subscribe()
}

selectedSemestre($event: any) {
  this.semestreSelected = $event
  console.log(this.semestreSelected);
}

onSelectedClasse($event: any) {
  this.classeSelected = $event
  console.log(this.classeSelected);
}

allAnneeScolaireData()
{
  this._anneeScolaireService.all().pipe(
    tap({
      next:(res)=>{
        console.log(res);
       this.allAnneeScolaire = res.data
      },
      complete: () => {
        console.log('observable terminer 🚀');
      },
      error: (err) => {
        console.error(err);
      },
    })
  ).subscribe()
}

onsubmit(){
  console.log(this.libelle);
  this.data = {
    libelle: this.libelle,
    classes:this.classeSelected,
    semestres:this.semestreSelected
  }
  this._anneeScolaireService.add(this.data).pipe(
    tap({
      next:(res)=>{
        console.log(res);
     
        if (res.success) {
          Swal.fire({
            icon: "success",
            title: "Success",
            text: `${res.message}`,
            showConfirmButton: false,
            timer: 1500
          });
      }
      },
      complete: () => {
        console.log('observable terminer 🚀');
      },
      error: (err) => {
        console.error(err);
      },
    })
  ).subscribe()

}
  
}




import { Component } from '@angular/core';
import { FiliereService } from '../../services/filiere.service';
import { ClasseService } from '../../services/classe.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClasseInterface, ModuleInterface, SharedInterface } from 'src/app/interface/abstract';
import { tap } from 'rxjs';
import { ModuleService } from '../../services/module.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-classe',
  templateUrl: './classe.component.html',
  styleUrls: ['./classe.component.css']
})
export class ClasseComponent {
  openDrawer: boolean = false;
  libelle:string=""
  filiereSelect: number = 0;
  allFiliere!:SharedInterface[]
  allClasse!: ClasseInterface[]
  moduleSelected: any[] = []
  dataUnshift!:ClasseInterface
  constructor( private _filiereService: FiliereService, private _classeService:ClasseService ){
  
  }
  
   onButtoonDrawerClicked(){
      this.openDrawer = !this.openDrawer
   }

   ngOnInit(){
    this.allFiliereData();
    this.allclasseData()
   }

   selectedModule($event: any) {
    this.moduleSelected = $event
    console.log(this.moduleSelected);
  }

   onfiliereSelect(event: Event){
    const element = event.target as HTMLSelectElement
    this.filiereSelect = +element.value 
    console.log(this.filiereSelect);
    
   }

   allFiliereData(){
    this._filiereService.all().pipe(
      tap({
        next:(res)=>{
          console.log(res.data[0]);
          if (res.data[0].length == 0) {
            console.log('breukh');  
          }else{
            this.allFiliere = res.data
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

  allclasseData(){
    this._classeService.all().pipe(
      tap({
        next:(res)=>{
          console.log(res);

          if (res.data[0].length == 0) {
            console.log('breukh');  
          }
          if (res.success) {
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

  


  onSubmitClasse(){
     const data = {
      filiere_id : this.filiereSelect,
      libelle: this.libelle,
     }
   this.dataUnshift = {
    libelle: this.libelle,
    filiere: this.allFiliere.filter((filiere) => filiere.id == this.filiereSelect)[0]
   } 
   console.log(data);
   
     console.log(this.dataUnshift);
     
      this._classeService.add(data).pipe(
        tap({
          next:(res)=>{
            console.log(res);
           console.log(res);
           
            if (res.success) {
              Swal.fire({
                icon: "success",
                title: "Success",
                text: `${res.message}`,
                showConfirmButton: false,
                timer: 1500
              });
              this.allClasse.unshift(this.dataUnshift)
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

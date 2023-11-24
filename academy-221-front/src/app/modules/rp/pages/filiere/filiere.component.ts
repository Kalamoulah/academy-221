import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FiliereService } from '../../services/filiere.service';
import { tap } from 'rxjs';
import { SharedInterface } from 'src/app/interface/abstract';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-filiere',
  templateUrl: './filiere.component.html',
  styleUrls: ['./filiere.component.css']
})
export class FiliereComponent {
  libelle : string = "";
  openModal: boolean = false
  allFiliere!:SharedInterface[]
  constructor( private _filiereService: FiliereService){}

  ngOnInit(){
    this.allFiliereData()
   }


  onSubmitFiliere(){
    const data = {
      libelle:this.libelle
    }
     this._filiereService.add(data).pipe(
       tap({            
         next:(res)=>{
          if (res.success) {
            
              Swal.fire({
                icon: "success",
                title: "Success",
                text: "ajout reussie",
                showConfirmButton: false,
                timer: 1500
              });
     
            
          this.allFiliere.unshift(data)
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
     this.libelle = ""
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

  onclicled(){
    this.openModal = !this.openModal
  }
}

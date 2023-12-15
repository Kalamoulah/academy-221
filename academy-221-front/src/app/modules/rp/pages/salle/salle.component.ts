import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RpService } from '../../services/rp.service';
import { tap } from 'rxjs';
import { Salle } from 'src/app/interface/salle';
import { SalleService } from '../../services/salle.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-salle',
  templateUrl: './salle.component.html',
  styleUrls: ['./salle.component.css']
})
export class SalleComponent {
   openModal :boolean = false;
   salleform!: FormGroup
   sallesData!: Salle[]
    data!: Salle
   constructor(private _fb: FormBuilder, private _salleService: SalleService){
    this.salleform = this._fb.group({
      libelle:['', Validators.required],
      nombre_place:['',Validators.required]
    })
   }

   ngOnInit(){
     this.allDataSalle();
  
   }
   onclicled(){
    this.openModal = !this.openModal
   }

   onSubmitForm(){
    this.data = this.salleform.value
    console.log(this.data);
    
    this._salleService.add(this.data).pipe(
      tap({
        next:(res)=>{
          console.log(res);
          if (res.success) {
            Swal.fire({
              icon: "success",
              title: "Success",
              text: "ajout reussie",
              showConfirmButton: false,
              timer: 1500
            });
            this.sallesData.unshift(this.data)
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
    this.openModal = false
  }

  allDataSalle(){
    this._salleService.all().pipe(
      tap({
        next:(res)=>{
          console.log(res);
          
            if (res.success) {
              this.sallesData = res.data[0]
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

  validInput(name:string, formName:FormGroup){
    return this._salleService.validInput(name,formName)
  }

}

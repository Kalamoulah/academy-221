import { Component } from '@angular/core';
import { RpService } from '../../services/rp.service';
import { tap } from 'rxjs';
import { ModalInterface } from 'flowbite';
import { ModuleService } from '../../services/module.service';
import { ModuleInterface } from 'src/app/interface/abstract';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-module',
  templateUrl: './module.component.html',
  styleUrls: ['./module.component.css']
})
export class ModuleComponent {
  libelle : string = "";
  allModule!:ModuleInterface[]
  data!:ModuleInterface

  constructor( private _moduleService: ModuleService){}
   ngOnInit(){
    this.allModuleData()
   }

  onSubmitModule(){
  const data = {
     libelle :this.libelle
   }
    this._moduleService.add(data).pipe(
      tap({
        next:(res)=>{
          console.log(res);
          console.log(this.allModule);
          if (res.success) {
            Swal.fire({
              icon: "success",
              title: "Success",
              text: "ajout reussie",
              showConfirmButton: false,
              timer: 1500
            });
            this.allModule.unshift(data)
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

  

  allModuleData(){
      this._moduleService.all().pipe(
        tap({
          next:(res)=>{
            console.log(res);
            if (res.data[0].length == 0) {
              console.log('breukh');  
            }else{
              this.allModule=res.data[0]
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

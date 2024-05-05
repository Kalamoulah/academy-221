import { Component } from '@angular/core';
import { ProfesseurService } from '../../services/professeur.service';
import { SharedInterface } from 'src/app/interface/abstract';
import { tap } from 'rxjs';
import { ModuleService } from '../../services/module.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-professeur',
  templateUrl: './professeur.component.html',
  styleUrls: ['./professeur.component.css']
})
export class ProfesseurComponent {
  formBuilder: any;

  constructor(private _fb: FormBuilder, private _professeurService: ProfesseurService, private _moduleService: ModuleService) {
    this.professeurForm = this._fb.group({
      name: ['', Validators.required],
      // adresse: ['', Validators.required],
      telephone: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
       password: ["password"]
    });

  }
  allModules!: SharedInterface[]
  openDrawer: boolean = false;
  allProfesseur!: SharedInterface[]
  moduleSelected!: SharedInterface[]
  professeurForm!: FormGroup

  //  closeDrawer: boolean = false;

  ngOnInit() {
    this.allProfesseurData();
    this.allModuleDate()
  }


  onButtoonDrawerClicked() {
    this.openDrawer = !this.openDrawer
  }

  selectedModules($event: any) {
  //  this.moduleSelected = $event
  this.moduleSelected = $event.map((module: any) => module.id);
  console.log(this.moduleSelected);

  }

  allProfesseurData() {
    this._professeurService.all().pipe(
      tap({
        next: (res) => {
          console.log(res.data[0]);
          if (res.data[0].length == 0) {
            console.log('breukh');
          } else {
            this.allProfesseur = res.data
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

  allModuleDate() {
    this._moduleService.all().pipe(
      tap({
        next: (res) => {
          console.log(res.data[0]);
          if (res.data[0].length == 0) {
            console.log('breukh');
          } else {
            this.allModules = res.data[0]
            console.log(this.allModules);
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

  addProfesseur() {

    const formData = this.professeurForm.value;
    formData.modules = this.moduleSelected;

    console.log(formData);

    this._professeurService.add(formData).pipe(
      tap({
        next:(res)=>{
          console.log(res.data[0]);
          if (res.data[0].length == 0) {

          }else{
            this.allProfesseur = res.data
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

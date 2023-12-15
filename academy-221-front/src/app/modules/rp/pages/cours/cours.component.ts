import { Component } from '@angular/core';
import { CoursService } from '../../services/cours.service';
import { tap } from 'rxjs';
import { SharedInterface } from 'src/app/interface/abstract';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cours',
  templateUrl: './cours.component.html',
  styleUrls: ['./cours.component.css']
})
export class CoursComponent {

  courseForm!: FormGroup;
  idModuleSelected: string = 'Choose a semestre';
  idSemestreSelected!: string;
  modules!: SharedInterface[];
  semestres!: SharedInterface[];
  courses:any[] = []
  classes: any[] = [];
  professeurs: { id: number; name: string }[] = [];
  openDrawer: boolean = false;
  classeConcerne: any[] = [];
  color: string = ""
  constructor(private _fb: FormBuilder, private _coursService: CoursService) {
    this.courseForm = _fb.group({
      module: 'Selectionne un module',
      semestre: 'Selectionne un semeste',
      professeur: 'Choisir un(e) professeur(e)',
      heure_global: '',
    });
  }

  ngOnInit() {
    this.all()
  }

  onButtoonDrawerClicked() {
    this.openDrawer = !this.openDrawer
  }

  all() {
    this._coursService.all().pipe(
      tap(
        {
          next: (res) => {
            this.modules = res.data.modules;
            this.semestres = res.data.semestres
            this.courses = res.data.course
            console.log(this.courses);
          },
          complete: () => {
            console.log('observavle complete ');
          },
          error: (err) => {
            console.log(err);
          }
        }
      )).subscribe();
  }

  chargeSemestre(idModule: number, idSemestre: number) {
    console.log(idSemestre);

    this._coursService
      .getProfAndClasse(idModule, idSemestre)
      .pipe(
        tap({
          next: (res) => {
            if (res.success) {
              this.professeurs = res.data.professeurs;
              this.classes = res.data?.classes;
              console.log(res.data);
            }
          },
          complete: () => {
            console.log('observable terminer 🚀');
          },
          error: (err) => {
            console.error(err);
          },
        })
      )
      .subscribe();
  }

  addcourse() {
    this.classeConcerne = this.classeConcerne.map((classe) => {
      return classe?.id;
    });
    const data = this.courseForm.value;
    const formData = {
      ...data,
      color: this.color,
      classeConcerne: this.classeConcerne.join(','),
    };
    console.log(formData);
    this._coursService.add(formData).pipe(
      tap({
        next: (res) => {
          console.log(res);
          
        },
        complete: () => {
          console.log('observable terminer 🚀');
        },
        error: (err) => {
          console.error(err);
        },
      })
    ).subscribe();
  }

  //event

  selectedModule(event: Event) {
    const element = event.target as HTMLSelectElement;
    this.idModuleSelected = element.value;
    console.log(this.idModuleSelected);
  }

  selectedSemestre(event: Event) {
    const element = event.target as HTMLSelectElement;
    this.idSemestreSelected = element?.value;

    console.log(this.idSemestreSelected);

    this.chargeSemestre(+this.idModuleSelected, +this.idSemestreSelected);
  }

  selectedClasse($event: any) {
    console.log($event);
    this.classeConcerne = $event;
  }

  onColorChoice(span: HTMLSpanElement) {
    const dataColor = span.getAttribute('data-color');
    this.color = dataColor!
    console.log(this.color);
  }

}

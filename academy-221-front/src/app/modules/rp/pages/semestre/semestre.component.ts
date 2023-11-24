import { Component } from '@angular/core';
import { SemestreService } from '../../services/semestre.service';
import { tap } from 'rxjs';
import { SharedInterface } from 'src/app/interface/abstract';

@Component({
  selector: 'app-semestre',
  templateUrl: './semestre.component.html',
  styleUrls: ['./semestre.component.css']
})
export class SemestreComponent {
 allsemestre!:SharedInterface
  constructor( private _semestreService: SemestreService){}


  ngOnInit(){
    this.allsemestreData()
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
}

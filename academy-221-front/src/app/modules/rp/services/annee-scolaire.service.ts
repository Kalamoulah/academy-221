import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AbstractService } from 'src/app/core/abstract.service';
import { dataResponse } from 'src/app/interface/abstract';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AnneeScolaireService  extends AbstractService<dataResponse>{
  override uri(): string {
    return "anneeScolaire"
  }

  all() :Observable<any>{
    return this.http.get<any>(`${environment.url}anneeScolaire`)
  }
  
}

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AbstractService } from 'src/app/core/abstract.service';

import { ModuleInterface, dataResponse } from 'src/app/interface/abstract';
import { environment } from 'src/environments/environment.development';
@Injectable({
  providedIn: 'root'
})
export class ProfesseurService extends AbstractService<dataResponse>{
  override uri(): string {
    return "professeur"
  }

  all() :Observable<any>{
    return this.http.get<any>(`${environment.url}professeur`)
  }

}

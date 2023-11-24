import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AbstractService } from 'src/app/core/abstract.service';
import { ModuleInterface, dataResponse } from 'src/app/interface/abstract';
import { Salle } from 'src/app/interface/salle';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class SalleService extends AbstractService<dataResponse>{
  override uri(): string {
    return "salle"
  }

  all() :Observable<any>{
    return this.http.get<any>(`${environment.url}uri`)
  }
}

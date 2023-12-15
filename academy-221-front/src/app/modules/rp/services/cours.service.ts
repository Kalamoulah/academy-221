import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AbstractService } from 'src/app/core/abstract.service';
import { dataResponse } from 'src/app/interface/abstract';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class CoursService extends AbstractService<dataResponse> {

  override uri(): string {
    return "cours"
  }

  all() :Observable<any>{
    return this.http.get<any>(`${environment.url}all`)
  }

  getProfAndClasse(idModule: number, idSemestre: number): Observable<any> {
    return this.http.get<any>(
      `${environment.url}module/${idModule}/semetre/${idSemestre}`
    );
  }

  getSalleDispo(data: any): Observable<any> {
    return this.http.post<any>(`${environment.url}salle`, data);
  }


}

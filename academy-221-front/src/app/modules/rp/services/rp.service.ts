import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ModuleInterface, dataResponse } from 'src/app/interface/abstract';
import { Salle } from 'src/app/interface/salle';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class RpService {

  constructor(private _http: HttpClient) { }

  add(data:Salle):Observable<dataResponse>{
    return this._http.post<dataResponse>(`${environment.url}salle`,data)
  }

  all() :Observable<any>{
      return this._http.get<any>(`${environment.url}salle`)
  }

  addModule(data:ModuleInterface) :Observable<dataResponse>{
      return this._http.post<dataResponse>(`${environment.url}module`,data)
  }
  


}

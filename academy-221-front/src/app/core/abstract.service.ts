import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export abstract class AbstractService<T>  {

  constructor(protected http: HttpClient) { }
   
  abstract uri():string;


  add<U>(data: U): Observable<T> {
    return this.http.post<T>(`${environment.url}${this.uri()}`, data);
  }

  delete<U>(id: number): Observable<T> {
    return this.http.delete<T>(`${environment.url}${this.uri()}/${id}`);
  }

  

  // update(data: articleVente ,id: number): Observable<T> {
  //   // data['_method'] = "PUT"
  //   return this.http.put<T>(`${environment.url}${this.uri()}/${id}`,data);
  // }

}

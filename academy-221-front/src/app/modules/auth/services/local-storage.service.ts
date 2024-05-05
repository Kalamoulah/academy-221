import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  save(key : string ,token : string) : void {
    localStorage.setItem(key, token);
  }

  get(key : string) : string|null {
    return localStorage.getItem(key);
  }

  remove(key : string) : void {
    localStorage.removeItem(key);
  }

  removeAll() : void {
    localStorage.clear();
  }
}

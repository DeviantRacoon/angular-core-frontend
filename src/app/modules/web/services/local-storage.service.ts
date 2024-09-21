import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  getItem<T>(key: string): T | null {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(atob(item)) as T : null;
  }

  setItem<T>(key: string, value: T) {
    const item = btoa(JSON.stringify(value));
    localStorage.setItem(key, item);
  }

  removeItem(key: string) {
    localStorage.removeItem(key);
  }

}



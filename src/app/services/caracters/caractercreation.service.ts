import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CaractercreationService {
  private storageData: string = 'formData';
  constructor() {}

  saveForData(data: any): void {
    try {
      localStorage.setItem(this.storageData, JSON.stringify(data));
    } catch (error) {
      console.error(error)
    }
  } 
}

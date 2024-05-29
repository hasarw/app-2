import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private formData = new BehaviorSubject<any>({});
  currentFormData = this.formData.asObservable();

  constructor() { }

  updateFormData(data: any) {
    this.formData.next(data);
  }
}

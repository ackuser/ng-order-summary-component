import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResponsiveService {

  private readonly isMobile = new BehaviorSubject(false);
  public screenWidth!: string;

  constructor() {
    this.checkWidth();
  }

  onMobileChange(status: boolean) {
    this.isMobile.next(status);
  }

  getMobileStatus(): Observable<any> {
    return this.isMobile.asObservable();
  }

  public checkWidth() {
    const width = window.innerWidth;
    if (width <= 375) {
      this.screenWidth = 'sm';
      this.onMobileChange(true);
    } else {
      this.screenWidth = 'lg';
      this.onMobileChange(false);
    }
  }

}

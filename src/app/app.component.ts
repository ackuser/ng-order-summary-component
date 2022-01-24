import { Component } from '@angular/core';
import { ResponsiveService } from './services/responsive.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'order-summary-component';
  isMobile$: any;

  constructor(private responsiveService: ResponsiveService) { }

  ngOnInit(): void {
    setTimeout(()=>{
      this.isMobile$ = this.responsiveService.getMobileStatus();
    })
  }

}

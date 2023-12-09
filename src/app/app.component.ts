import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component'; 
import { FooterComponent } from './footer/footer.component'; 
import { SubmissionsListComponent } from './submissions-list/submissions-list.component';
import { MapViewComponent } from './map-view/map-view.component';
import { ToggleButtonComponent } from './toggle-button/toggle-button.component';
import { DatePickerComponent } from './date-picker/date-picker.component';
import { ExportButtonComponent } from './export-button/export-button.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    RouterModule, 
    HeaderComponent, 
    FooterComponent,
    SubmissionsListComponent,
    MapViewComponent,
    ToggleButtonComponent,
    DatePickerComponent, 
    ExportButtonComponent, 
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'submissions-page';
  isListViewActive = true;

  onViewChange(viewType: string): void {
    this.isListViewActive = viewType === 'list';
  }

}

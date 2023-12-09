import { Component } from '@angular/core';

@Component({
  selector: 'app-toggle-button',
  standalone: true,
  imports: [],
  templateUrl: './toggle-button.component.html',
  styleUrls: ['./toggle-button.component.scss'] 
})
export class ToggleButtonComponent {
  isListViewActive = true; // default to list view
  toggleView(viewType: string): void {
    this.isListViewActive = viewType === 'list';
  }
}
import { Component } from '@angular/core';

@Component({
  selector: 'app-export-button',
  standalone: true,
  imports: [],
  templateUrl: './export-button.component.html',
  styleUrls: ['./export-button.component.scss']
})
export class ExportButtonComponent {

  exportData(): void {
    console.log('Export data logic goes here');
  }
}

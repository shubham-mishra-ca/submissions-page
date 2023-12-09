import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from '../header/header.component'; 
import { FooterComponent } from '../footer/footer.component'; 
import { DatePickerComponent } from '../date-picker/date-picker.component'; 
import { DropdownComponent } from '../dropdown/dropdown.component'; 
import { SearchBarComponent } from '../search-bar/search-bar.component'; 
import { ToggleButtonComponent } from '../toggle-button/toggle-button.component'; 
import { MapViewComponent } from '../map-view/map-view.component';  
import { ExportButtonComponent } from '../export-button/export-button.component'; 



@Component({
  selector: 'app-submissions-list',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    HeaderComponent,
    FooterComponent,
    DatePickerComponent,
    DropdownComponent,
    SearchBarComponent,
    ToggleButtonComponent,
    MapViewComponent,
    ExportButtonComponent,
  ],
  templateUrl: './submissions-list.component.html',
  styleUrls: ['./submissions-list.component.scss']
})
export class SubmissionsListComponent implements OnInit {
  submissions: any[] = []; 
  

  ngOnInit(): void {

    this.submissions = this.getSubmissions(); 
  }


  // Placeholder method to simulate fetching data
  private getSubmissions(): any[] {
    // This should be replaced with actual data retrieval logic
    return [
      {
        task: 'Work Flow: Requires Location',
        status: 'Low Risk',
        from: 'zendu@zendu.com',
        to: 'tracy@zenduit.com',
        customerAddress: '2118 Thornridge Cir. Syracuse, Connecticut 35624',
        dueDate: 'Oct 6, 02:38 AM'
      },
      {
        task: 'Work Flow: Requires Location',
        status: 'Uncomplete',
        from: 'zendu@zendu.com',
        to: 'tracy@zenduit.com',
        customerAddress: '1901 Thornridge Cir. Shiloh, Hawaii 81603',
        dueDate: 'Oct 6, 01:40 PM'
      },
      {
        task: 'Work Flow: Requires Location',
        status: 'Unassigned',
        from: 'zendu@zendu.com',
        to: 'tracy@zenduit.com',
        customerAddress: '4140 Parker Rd. Allentown, New Mexico 31134',
        dueDate: 'Oct 7, 01:14 AM'
      },
      {
        task: 'Work Flow: Requires Location',
        status: 'Unassigned',
        from: 'zendu@zendu.com',
        to: 'tracy@zenduit.com',
        customerAddress: '2118 Thornridge Cir. Syracuse, Connecticut 35624',
        dueDate: 'Oct 7, 01:14 AM'
      },
      {
        task: 'Work Flow: Requires Location',
        status: 'Uncomplete',
        from: 'zendu@zendu.com',
        to: 'tracy@zenduit.com',
        customerAddress: '4517 Washington Ave. Manchester, Kentucky 39495',
        dueDate: 'Oct 7, 03:56 AM'
      },
      {
        task: 'Work Flow: Requires Location',
        status: 'Uncomplete',
        from: 'zendu@zendu.com',
        to: 'tracy@zenduit.com',
        customerAddress: '8502 Preston Rd. Inglewood, Maine 98380',
        dueDate: 'Oct 7, 04:20 PM'
      },
      {
        task: 'Work Flow: Requires Location',
        status: 'Low Risk',
        from: 'zendu@zendu.com',
        to: 'tracy@zenduit.com',
        customerAddress: '2118 Thornridge Cir. Syracuse, Connecticut 35624',
        dueDate: 'Oct 8, 04:12 AM'
      },
      {
        task: 'Work Flow: Requires Location',
        status: 'Low Risk',
        from: 'zendu@zendu.com',
        to: 'tracy@zenduit.com',
        customerAddress: '2118 Thornridge Cir. Syracuse, Connecticut 35624',
        dueDate: 'Oct 8, 04:37 AM'
      },
      {
        task: 'Work Flow: Requires Location',
        status: 'Low Risk',
        from: 'zendu@zendu.com',
        to: 'tracy@zenduit.com',
        customerAddress: '2118 Thornridge Cir. Syracuse, Connecticut 35624',
        dueDate: 'Oct 9, 06:12 PM'
      },
    ];
  }

  // Method to get the CSS class based on the submission status
  getStatusClass(status: string): string {
    switch (status.toLowerCase()) { 
      case 'low risk':
        return 'status-low-risk';
      case 'uncomplete':
        return 'status-uncomplete';
      case 'unassigned':
        return 'status-unassigned';
      default:
        return '';
    }
  }
}

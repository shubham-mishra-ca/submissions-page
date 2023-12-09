import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-side-list-view',
  standalone: true,
  imports: [CommonModule], 
  templateUrl: './side-list-view.component.html',
  styleUrls: ['./side-list-view.component.scss']
})
export class SideListViewComponent {
  listItems = [
    {
      taskTitle: "Work Flow: Requires Location", 
      status: "Uncomplete",
      from: "sender@example.com",
      to: "receiver@example.com",
      dueDate: "06 December"
    },
    {
      taskTitle: "Work Flow: Requires Location", 
      status: "Complete",
      from: "sender@example.com",
      to: "receiver@example.com",
      dueDate: "06 December"
    },

    {
      taskTitle: "Work Flow: Requires Location", 
      status: "Uncomplete",
      from: "sender@example.com",
      to: "receiver@example.com",
      dueDate: "06 December"
    },
    
    {
      taskTitle: "Work Flow: Requires Location", 
      status: "Needs Review",
      from: "sender@example.com",
      to: "receiver@example.com",
      dueDate: "06 December"
    },


  ];


  getStatusClass(status: string): string {
    if (status === 'Complete') return 'status-low-risk';
    if (status === 'Uncomplete') return 'status-uncomplete';
    if (status === 'Needs Review') return 'status-unassigned';
    return ''; 
  }
}

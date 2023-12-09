import { Component, OnInit } from '@angular/core';
import { formatDate } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-date-picker',
  standalone: true,
  imports: [FormsModule], 
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss']
})

export class DatePickerComponent implements OnInit {
  selectedDate: string = ''; 

  ngOnInit(): void {
    this.selectedDate = this.getCurrentFormattedDate();
  }

  getCurrentFormattedDate(): string {
    const today = new Date();
    return formatDate(today, 'yyyy-MM-dd', 'en-GB');
  }

  onDateChange(): void {

    
  }


  convertToDisplayFormat(date: string): string {
    const [year, month, day] = date.split('-');
    return `${day}/${month}/${year}`;
  }


}

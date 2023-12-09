import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dropdown',
  standalone: true,
  imports: [FormsModule], // Import FormsModule
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'] // Use styleUrls instead of styleUrl
})
export class DropdownComponent {
  selectedOption: string; // Define the property used in template

  constructor() {
    this.selectedOption = ''; // Initialize selectedOption, perhaps with a default value
  }

  onOptionSelect(newOption: string): void {
    this.selectedOption = newOption;
    // Here you can add any logic that needs to happen when the option changes
  }
}

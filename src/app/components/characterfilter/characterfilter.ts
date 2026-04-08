import { Component, EventEmitter, Output } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-characterfilter',
  standalone: true,
  imports: [MatFormFieldModule, MatSelectModule],
  templateUrl: './characterfilter.html',
  styleUrl: './characterfilter.css'
})
export class CharacterFilterComponent {
  @Output() houseSelected = new EventEmitter<string>();

  houses: string[] = [
    'All',
    'Gryffindor',
    'Slytherin',
    'Hufflepuff',
    'Ravenclaw',
    'No House'
  ];

  onHouseChange(value: string): void {
    this.houseSelected.emit(value);
  }
}
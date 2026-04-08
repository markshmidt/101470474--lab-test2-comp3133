import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CharacterService } from '../../services/character.service';
import { Character } from '../../models/character';
import { CharacterFilterComponent } from '../characterfilter/characterfilter';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-characterlist',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    CharacterFilterComponent,
    MatCardModule,
    MatButtonModule,
    MatProgressSpinnerModule
  ],
  templateUrl: './characterlist.html',
  styleUrl: './characterlist.css'
})
export class CharacterListComponent implements OnInit {
  private characterService = inject(CharacterService);

  characters: Character[] = [];
  loading = false;
  errorMessage = '';

  ngOnInit(): void {
    this.loadAllCharacters();
  }

  loadAllCharacters(): void {
    this.loading = true;
    this.errorMessage = '';
    this.characters = [];

    this.characterService.getAllCharacters().subscribe({
      next: (data: Character[]) => {
        this.characters = data;
        this.loading = false;
      },
      error: (err) => {
        console.error('Failed to load characters:', err);
        this.errorMessage = 'Failed to load characters.';
        this.loading = false;
      }
    });
  }

  onHouseSelected(house: string): void {
    this.loading = true;
    this.errorMessage = '';
    this.characters = [];

    if (house === 'All') {
      this.loadAllCharacters();
      return;
    }

    if (house === 'No House') {
      this.characterService.getAllCharacters().subscribe({
        next: (data: Character[]) => {
          this.characters = data.filter((c) => !c.house || c.house.trim() === '');
          this.loading = false;
        },
        error: (err) => {
          console.error('Failed to filter no-house characters:', err);
          this.errorMessage = 'Failed to filter characters.';
          this.loading = false;
        }
      });
      return;
    }

    this.characterService.getCharactersByHouse(house).subscribe({
      next: (data: Character[]) => {
        this.characters = data;
        this.loading = false;
      },
      error: (err) => {
        console.error('Failed to load house characters:', err);
        this.errorMessage = 'Failed to load house characters.';
        this.loading = false;
      }
    });
  }

  getHouseColor(house: string): string {
    switch (house) {
      case 'Gryffindor':
        return '#d32f2f';
      case 'Slytherin':
        return '#2e7d32';
      case 'Ravenclaw':
        return '#1565c0';
      case 'Hufflepuff':
        return '#f9a825';
      default:
        return '#757575';
    }
  }
}
import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';

import { CharacterService } from '../../services/character.service';
import { Character } from '../../models/character';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-characterdetails',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatCardModule,
    MatButtonModule,
    MatProgressSpinnerModule
  ],
  templateUrl: './characterdetails.html',
  styleUrl: './characterdetails.css'
})
export class CharacterDetailsComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private characterService = inject(CharacterService);

  character: Character | null = null;
  loading = true;
  errorMessage = '';

  ngOnInit(): void {
    this.loading = true;
    this.character = null;
    this.errorMessage = '';
    const id = this.route.snapshot.paramMap.get('id');

    if (!id) {
      this.errorMessage = 'Missing character id in route.';
      this.loading = false;
      return;
    }

    this.characterService.getCharacterById(id).subscribe({
      next: (data) => {
        this.character = data?.[0] ?? null;
        if (!this.character) {
          this.errorMessage = 'Character not found.';
        }
        this.loading = false;
      },
      error: () => {
        this.errorMessage = 'Failed to load character details.';
        this.loading = false;
      }
    });
  }
}
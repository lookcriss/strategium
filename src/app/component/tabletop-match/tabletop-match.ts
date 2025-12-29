import { DatePipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LocalStorageService } from '../../local-storage-service';

type FormPlayer = FormGroup<{
  name: FormControl<string>;
  faction: FormControl<string>;
  initialCommandPoints: FormControl<number>;
}>;

type MatchForm = FormGroup<{
  name: FormControl<string>;
  players: FormArray<FormPlayer>;
}>;

@Component({
  selector: 'tabletop-match',
  imports: [DatePipe],
  templateUrl: './tabletop-match.html',
  styleUrl: './tabletop-match.scss',
})
export class TabletopMatchComponent {

  private localStorageService = inject(LocalStorageService);
  match = inject(Router).getCurrentNavigation()?.extras.state?.['match'];

  constructor() {
    console.log('TabletopMatchComponent initialized with match:', this.match);
    console.log('Current Navigation Extras State:', inject(Router).getCurrentNavigation()?.extras.state);
    if (!this.match) {
      const storedMatch = this.localStorageService.getItem('match');
      console.log('Retrieved match from localStorage:', storedMatch);
      if (storedMatch) {
        this.match = storedMatch;
      }
    }
    if (this.match) {
    this.match.status = 'ongoing';
    } 
    this.localStorageService.setItem('match', this.match);
    console.log('Stored match in localStorage:', this.match);

  }
}

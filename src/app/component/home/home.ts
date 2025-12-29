import { Component, model, signal } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { inject } from '@angular/core';
import { ComponentRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CreateTabletopMatch } from './template/create-tabletop-match/create-tabletop-match';
import type { TableTopMatch } from '../../data/tabletop-match';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',

  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    ReactiveFormsModule,
  ], // <-- bring the dialog module in

  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class HomeComponent {
  readonly dialog = inject(MatDialog);
  readonly router = inject(Router);

  openCreateTableTopMatchDialog(): void {
    const dialogRef = this.dialog.open(CreateTabletopMatch, {
      data: { },
  panelClass: 'create-tabletop-match-dialog-panel'

    });

    dialogRef.afterClosed().subscribe(async (result) => {
      console.log('The dialog was closed');
      console.log(result);
      if (result && typeof result === 'object') {
        // Assuming result is a TableTopMatch
        // Use Angular Router to navigate and pass the match as state
        this.router.navigate(['tabletop-match'], { state: { match: result as TableTopMatch } });
      }
    });
  }
}

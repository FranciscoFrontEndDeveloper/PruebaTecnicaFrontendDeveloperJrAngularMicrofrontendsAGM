import { Component, inject, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
@Component({
  selector: 'app-buttonicon',
  imports: [MatIconModule, MatButtonModule,  MatDialogModule,     ],
  templateUrl: './buttonicon.component.html',
  styleUrl: './buttonicon.component.sass'
})
export class ButtoniconComponent {
  @Input('title') title: string = '';
  readonly dialog = inject(MatDialog);
  
  
}

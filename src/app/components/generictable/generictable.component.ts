import { Component, inject, Input } from '@angular/core';
import { MatIcon } from "@angular/material/icon";
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { allCharactersInterface } from '../../interfaces/namesgif';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
@Component({
  selector: 'app-generictable',
  imports: [MatIcon, MatTableModule, MatDialogModule,     MatDialogModule,MatButtonModule, MatIconModule],
  templateUrl: './generictable.component.html',
  styleUrl: './generictable.component.sass'
})
export class GenerictableComponent {
  @Input('dataSource') dataSource = new MatTableDataSource<allCharactersInterface>([]);
  @Input('columnsToDisplay')columnsToDisplay: string[] = [];
  @Input('columnsToDisplayWithExpand')columnsToDisplayWithExpand: string[] = [];
  
  
  expandedElement!: allCharactersInterface | null;
  /** Checks whether an element is expanded. */
  isExpanded(element: allCharactersInterface) {
    return this.expandedElement === element;
  }
    /** Toggles the expanded state of an element. */
  toggle(element: allCharactersInterface) {
    this.expandedElement = this.isExpanded(element) ? null : element;
  }

}

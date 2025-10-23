import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ViewChild,
  inject,
  OnInit,
} from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { CaracterService } from '../../services/caracters/caracter.service';
import { allCharactersInterface } from '../../interfaces/namesgif';

@Component({
  selector: 'app-infotable',
  imports: [
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatButtonModule,
    MatDialogModule,
  ],
  templateUrl: './infotable.component.html',
  styleUrl: './infotable.component.sass',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InfotableComponent implements AfterViewInit {
  constructor(private caracterService: CaracterService) {}
  readonly dialog = inject(MatDialog);
  public characters: any[] = [];
  columnsToDisplay: string[] = [];
  columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];
  expandedElement!: allCharactersInterface | null;
  dataSource = new MatTableDataSource<allCharactersInterface>([]);
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    console.log('hola pacho');
    this.loadCaracters();
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  /** Checks whether an element is expanded. */
  isExpanded(element: allCharactersInterface) {
    return this.expandedElement === element;
  }

  /** Toggles the expanded state of an element. */
  toggle(element: allCharactersInterface) {
    this.expandedElement = this.isExpanded(element) ? null : element;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  openDialog() {
    const dialogRef = this.dialog.open(DialogComponent);

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }

  loadCaracters() {
    this.caracterService.getAllCaracters().subscribe((data) => {
      this.dataSource.data = data;
      this.columnsToDisplay = Object.keys(data[0]).filter(
        (key) =>
          key !== 'episode' &&
          key !== 'url' &&
          key !== 'created' &&
          key !== 'type' &&
          key !== 'origin' &&
          key !== 'location' &&
          key !== 'image'
      );
      console.log(this.columnsToDisplay);
    });
  }
}

import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ViewChild,
  OnInit,
} from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';

import { CaracterService } from '../../services/caracters/caracter.service';
import { allCharactersInterface } from '../../interfaces/namesgif';
import { ChangeDetectorRef } from '@angular/core';
import { FilterComponent } from '../filter/filter.component';
import { PaginatorComponent } from '../paginator/paginator.component';
import { GenerictableComponent } from '../generictable/generictable.component';
import { MatTableDataSource } from '@angular/material/table';
import { ButtoniconComponent } from '../buttonicon/buttonicon.component';
@Component({
  selector: 'app-infotable',
  imports: [
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatButtonModule,
    FilterComponent,
    PaginatorComponent,
    GenerictableComponent,
    ButtoniconComponent,
  ],
  templateUrl: './infotable.component.html',
  styleUrl: './infotable.component.sass',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InfotableComponent implements OnInit {
  public title = 'Personaje';
  public dataSource = new MatTableDataSource<allCharactersInterface>([]);
  public columnsToDisplay: string[] = [];
  public columnsToDisplayWithExpand: string[] = [];
  constructor(
    private caracterService: CaracterService,
    private changeDetectorRef: ChangeDetectorRef
  ) {}
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.loadCaracters();
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
      this.columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];
      this.changeDetectorRef.markForCheck();
    });
  }
}

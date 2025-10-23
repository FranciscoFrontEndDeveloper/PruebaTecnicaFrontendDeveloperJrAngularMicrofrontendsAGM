import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
@Component({
  selector: 'app-paginator',
  imports: [MatPaginatorModule,MatPaginator],
  templateUrl: './paginator.component.html',
  styleUrl: './paginator.component.sass'
})
export class PaginatorComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
    ngAfterViewInit() {
    // this.dataSource.paginator = this.paginator;
  }
}

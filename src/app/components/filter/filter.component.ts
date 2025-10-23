import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
@Component({
  selector: 'app-filter',
  imports: [MatFormFieldModule, MatInputModule],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.sass'
})
export class FilterComponent {
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    // this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}

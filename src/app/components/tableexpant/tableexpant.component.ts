import { Component, signal } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatExpansionModule } from '@angular/material/expansion';
import {MatListModule} from '@angular/material/list';
import { SidenavComponent } from "../sidenav/sidenav.component";
@Component({
  selector: 'app-tableexpant',
  imports: [MatSidenavModule, MatExpansionModule, MatListModule, SidenavComponent],
  templateUrl: './tableexpant.component.html',
  styleUrl: './tableexpant.component.sass'
})
export class TableexpantComponent {
  readonly panelOpenState = signal(false);
}

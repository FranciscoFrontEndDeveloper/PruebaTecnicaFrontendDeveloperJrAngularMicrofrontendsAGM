import { Component } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { InfotableComponent } from "../infotable/infotable.component";
@Component({
  selector: 'app-sidenav',
  imports: [MatSidenavModule, InfotableComponent],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.sass'
})
export class SidenavComponent {

}

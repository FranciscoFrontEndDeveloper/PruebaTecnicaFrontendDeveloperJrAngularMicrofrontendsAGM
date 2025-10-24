import { Component, OnInit } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { InfotableComponent } from '../infotable/infotable.component';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-sidenav',
  imports: [MatSidenavModule, MatButtonModule, MatIconModule, CommonModule, InfotableComponent],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.sass',
})
export class SidenavComponent implements OnInit {
  public drawerMode: 'side' | 'over' = 'side';
  public drawerOpened = true;
  public isMobile = false;

  constructor(private breakpointObserver: BreakpointObserver) { }
  
  ngOnInit(): void {
    // Detecta si la pantalla es menor o igual a 768px
    this.breakpointObserver.observe(['(max-width: 768px)']).subscribe((result) => {
      if (result.matches) {
        this.drawerMode = 'over';
        this.drawerOpened = false;
        this.isMobile = true;
      } else {
        this.drawerMode = 'side';
        this.drawerOpened = true;
        this.isMobile = false;
      }
    });
    }
}

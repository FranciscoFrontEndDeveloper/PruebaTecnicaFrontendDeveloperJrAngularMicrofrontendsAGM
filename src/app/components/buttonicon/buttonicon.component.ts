import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
@Component({
  selector: 'app-buttonicon',
  imports: [MatIconModule, MatButtonModule],
  templateUrl: './buttonicon.component.html',
  styleUrl: './buttonicon.component.sass'
})
export class ButtoniconComponent {
@Input('title') title: string = '';
}

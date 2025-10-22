import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-buttonmain',
  imports: [MatButtonModule],
  templateUrl: './buttonmain.component.html',
  styleUrl: './buttonmain.component.sass'
})
export class ButtonmainComponent {
public titleButton: string = 'basico'
}

import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';


@Component({
  selector: 'app-formcreation',
  imports: [MatButtonModule, MatIconModule, MatFormFieldModule, MatInputModule],
  templateUrl: './formcreation.component.html',
  styleUrl: './formcreation.component.sass'
})
export class FormcreationComponent {
@Input('field') field: string = '' 
}

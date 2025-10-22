import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-gifinitial',
  imports: [CommonModule],
  templateUrl: './gifinitial.component.html',
  styleUrl: './gifinitial.component.sass'
})
export class GifinitialComponent {
@Input() gifnames: string[] = [];
public gifname: string = ''
}

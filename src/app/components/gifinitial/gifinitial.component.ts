import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Namesgif } from '../../interfaces/namesgif';

@Component({
  selector: 'app-gifinitial',
  imports: [CommonModule],
  templateUrl: './gifinitial.component.html',
  styleUrl: './gifinitial.component.sass'
})
export class GifinitialComponent {
@Input() gifnames: Namesgif[] = [];
public gifname: string = ''
}

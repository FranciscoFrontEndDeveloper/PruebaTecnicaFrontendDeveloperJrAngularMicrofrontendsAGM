import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Namesgif } from '../../interfaces/namesgif';
import { ButtonmainComponent } from "../buttonmain/buttonmain.component";

@Component({
  selector: 'app-gifinitial',
  imports: [CommonModule, ButtonmainComponent],
  templateUrl: './gifinitial.component.html',
  styleUrl: './gifinitial.component.sass'
})
export class GifinitialComponent {
@Input() gifnames: Namesgif[] = [];
public gifname: string = ''
}

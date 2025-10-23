import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-buttonmain',
  imports: [MatButtonModule, RouterLink],
  templateUrl: './buttonmain.component.html',
  styleUrl: './buttonmain.component.sass',
})
export class ButtonmainComponent {
  public titleButton: string = 'ver mas';
  @Input('routerApi') routerApi: string = '';
  public prueba: string = this.routerApi.slice(0, -1);

}

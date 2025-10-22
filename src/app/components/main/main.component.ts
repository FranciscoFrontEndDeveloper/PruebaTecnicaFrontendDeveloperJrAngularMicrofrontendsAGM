import { Component } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { GifinitialComponent } from "../gifinitial/gifinitial.component";
@Component({
  selector: 'app-main',
  imports: [MatSlideToggleModule, GifinitialComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.sass'
})
export class MainComponent {
  public gifnames: string[] = ['gifcaracters.webp', 'gifLocations.gif', 'gifEpisodes.gif'];
  
}

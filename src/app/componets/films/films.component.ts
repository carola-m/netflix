import { Component, Input } from '@angular/core';
import { Films } from 'src/app/componets/models/interfaces';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent {
  @Input() infoFilms!: Films;

}

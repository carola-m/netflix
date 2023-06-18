import { Component, Input } from '@angular/core';
import {Films, GalleryI } from '../models/interfaces';
@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
@Input() infoPopular!: GalleryI;
}

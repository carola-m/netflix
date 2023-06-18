import { Component, Input } from '@angular/core';
import { GalleryI } from '../models/interfaces';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {
  @Input() infoGallery!: GalleryI;
}

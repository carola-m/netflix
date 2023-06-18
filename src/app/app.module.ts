import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroComponent } from './componets/hero/hero.component';
import { NavComponent } from './componets/nav/nav.component';
import { GalleryComponent } from './componets/gallery/gallery.component';
import { FilmsComponent } from './componets/films/films.component';
import { ModelsComponent } from './componets/models/models.component';


@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    NavComponent,
    GalleryComponent,
    FilmsComponent,
    ModelsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

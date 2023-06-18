import { GalleryI } from './componets/models/interfaces';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'netflix-app';

  mostPopular: GalleryI = {
    section: "Los más populares hoy",
    films: [
      {
        title: "Arnold",
        image: "https://imagenes.20minutos.es/files/article_default_content/uploads/imagenes/2023/05/18/arnold-schwarzenegger.jpeg",
      },
  
      {
        title: "All american",
        image:"https://www.justwatch.com/images/poster/255475118/s332/temporada-4",
      },
  
      {
        title: "Manifest",
        image: "https://m.media-amazon.com/images/M/MV5BZjllMzc1ZTAtMzYyYi00OWU4LTgzNTAtYWJmMWNhZDI3ODVjXkEyXkFqcGdeQXVyNjEwNTM2Mzc@._V1_.jpg"
      },
  
      {
        title: "Rabo de Peixe",
        image:"https://pics.filmaffinity.com/rabo_de_peixe-911595856-mmed.jpg",
      } 
    ]
  }

  comedyFilms: GalleryI = {
    section: "comedia",
    films: [
      {
        title: "Los Miller",
        image: "https://images-na.ssl-images-amazon.com/images/S/pv-target-images/ef5b99ee94c02f5304362a06fc28aa0502aa5687770cf83bd4b7fbc0ed4977ee._RI_TTW_.jpg",
      },
  
      {
        title: "Ted",
        image:"https://es.web.img3.acsta.net/medias/nmedia/18/86/62/03/20141188.jpg",
      },
  
      {
        title: "La mujer de mis pesadillas",
        image: "https://m.media-amazon.com/images/I/81gf2P9nNnL._AC_UF894,1000_QL80_.jpg"
      },
  
      {
        title: "Mi novia Polly",
        image:"https://images-na.ssl-images-amazon.com/images/S/pv-target-images/146ef0e2188a0c5be3e7dbf2df3931b8458c916c58775d4951c9c9ae8d15e09c._RI_TTW_.jpg",
      },
      {
        title: "Que paso ayer?",
        image: "https://2.bp.blogspot.com/_zmf-oDLq9_Q/S4r04YdYptI/AAAAAAAAAJk/1TK6CkHtFyg/s320/que-paso-ayer-poster.jpg"
      }
    ]
  }
  
  terrorFilms: GalleryI = {
    section: "terror",
    films: [
      {
        title: "Anabelle",
        image: "https://musicimage.xboxlive.com/catalog/video.movie.8D6KGWXD8DNC/image?locale=es-es&mode=crop&purposes=BoxArt&q=90&h=225&w=150&format=jpg",
      },
  
      {
        title: "Tin y Tina",
        image:"https://c8.alamy.com/compes/2r3mm0j/tin-tina-aka-tina-y-tina-aka-tina-y-tina-cartel-espanol-desde-la-izquierda-carlos-gonzalez-morollon-anastasia-russo-2023-netflix-cortesia-de-everett-collection-2r3mm0j.jpg",
      },
  
      {
        title: "Megan",
        image:"https://img.aullidos.com/imagenes/caratulas/megan-poster-nuevo.jpg",
      },
  
      {
        title: "evil dead",
        image:"https://pbs.twimg.com/media/FKMwLrnXEAgbfsy?format=jpg&name=4096x4096",
      },
      {
        title: "El exorcista del papa",
        image: "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2023/04/exorcista-papa-3005606.jpg"
      }
    ]
  }
}



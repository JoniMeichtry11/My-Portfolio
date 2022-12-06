import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-proyects',
  templateUrl: './proyects.component.html',
  styleUrls: ['./proyects.component.scss']
})
export class ProyectsComponent implements OnInit {
  // Lazy loading images
  imageFixture: string = "../../assets/gifs/fixture.jpg"
  imageNapoleon: string = "../../assets/gifs/napoleon.png"

  imageHeroe: string = "../../assets/gifs/heroes.gif";
  imageMemes: string = "../../assets/gifs/memes.gif";
  imageMusic: string = "../../assets/gifs/MI MUSICA.gif";

  imagePokemon: string = "../../assets/gifs/pokemon.gif";

  imageBudget: string = "../../assets/gifs/presupuesto.gif";
  imageRandom: string = "../../assets/gifs/foto-random.gif";

  imageChat: string = "../../assets/gifs/javascript.gif";
  imagePortfolio: string = "../../assets/gifs/portafolio.png";
  imageClima: string = "../../assets/gifs/clima.png";
  imageViajeRandom: string = "../../assets/gifs/viaje.gif"

  constructor() {}

  ngOnInit(): void {}

}

import { inject } from 'aurelia-framework';
import { StarwarsService } from 'services/starwars-service';

@inject(StarwarsService)
export class MovieDetails {
  id: string;
  movie;
  starwarsService: StarwarsService;
  
  constructor(StarwarsService) {
    this.starwarsService = StarwarsService;    
  }

  activate(params: any): any {
    this.id = params.id;

    if(this.id)
    this.starwarsService.getFilm(this.id).then(res => res.json()).then(film => {
      this.movie = film;
    })
   }
}


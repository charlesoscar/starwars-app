import { inject } from 'aurelia-framework';
import { StarwarsService } from './../../../services/starwars-service';
import {Movie} from '../../../infrastructure/models/movie'
import { responseTypeTransformer } from 'aurelia-http-client';

@inject(StarwarsService)
export class MovieList {
  movies: Movie[] = []
  starwarsService: StarwarsService;

  constructor(StarwarsService) {
    this.starwarsService = StarwarsService
  }

  attached() {
    this.starwarsService.listFilms().then(res => {
      return res.json();
    }).then(list => {
      this.movies = list.results;
      this.setIds();
    })

  }
  
  setIds(){
    for (let index = 0; index < this.movies.length; index++) {
      this.movies[index].id = index + 1;
    }
  }

}



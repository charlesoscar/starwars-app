import {Movie} from '../../../infrastructure/models/movie'
export class MovieList {
  movies: Movie[] = []
  attached() {
    const movie: Movie = {id: 1, name: 'first'}
    const movie2: Movie = {id: 2, name: 'second'}
    this.movies.push(movie)
    this.movies.push(movie2)
  }  
}



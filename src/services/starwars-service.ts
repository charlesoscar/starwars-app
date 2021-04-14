export class StarwarsService {
    baseUrl = "https://swapi.dev/api"
    
    constructor(){
    }

    listFilms(): Promise<any>{
        return fetch(`${this.baseUrl}/films`)
    }

    getFilm(id: string){
        return fetch(`${this.baseUrl}/films/${id}`)
    }
    
    call(url){
      return fetch(`${url}`)
    }
}

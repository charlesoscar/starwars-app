import { inject, bindable } from 'aurelia-framework';
import { StarwarsService } from 'services/starwars-service';

@inject(StarwarsService)
export class Planet{
  @bindable url;
  starwarsService: StarwarsService;
  planet;
  loading = false;

  constructor(StarwarsService) {
    this.starwarsService = StarwarsService
  }

  attached(){
    this.getPlanet();
  }

  getPlanet(){
    this.loading = true;
    this.starwarsService.call(this.url).finally(() => this.loading = false).then(res => res.json()).then(planet => {
      this.planet = planet;
    })
  }
}

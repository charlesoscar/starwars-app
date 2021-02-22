import { RouterConfiguration, Router } from 'aurelia-router';
import { PLATFORM } from "aurelia-framework";
export class App {
  router: Router;
  configureRouter(config: RouterConfiguration, router: Router): void {
    this.router = router;
    config.options.root = "/";
    config.options.pushState = true;
    config.title = 'starwars-app';
    config.map([
      {
        route: [''],
        name: 'home',
        title: 'Home',
        nav: true,
        moduleId: PLATFORM.moduleName('./modules/home/home')
      },
      {
        route: 'movies',
        name: 'movies-routes',
        moduleId: PLATFORM.moduleName('./modules/movies/movies-routes'),
        nav: true,
        title: 'Movies'
      },
    ]);

  }
  public message = 'Hello World!';
}

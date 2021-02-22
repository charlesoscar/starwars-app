import { RouterConfiguration, Router } from 'aurelia-router';
import { PLATFORM } from 'aurelia-framework'
export class MoviesRoutes {
  router: Router;
  configureRouter(config: RouterConfiguration, router: Router): void {
    config.map([
      {
        route: '',
        name: 'movies-list',
        nav: false,
        moduleId: PLATFORM.moduleName('./movie-list/movie-list')
      },
      {
        route: ':id',
        moduleId: PLATFORM.moduleName('./movie-details/movie-details'),
        nav: false,
        name: 'movie-details',
        href: '/movies/:id'
      },
    ]);
    this.router = router;
  }
}

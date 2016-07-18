import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';

@Injectable()
export class HeroService {
  getHeroes() {
    //return Promise.resolve(HEROES);

    return new Promise(function(resolve, reject) {
      resolve(HEROES);
    });
  };

  getHeroesSlowly() {
    return new Promise<Hero[]>(resolve =>
      setTimeout(() => resolve(HEROES), 1000) // 1 seconds
    );
  };

  getHero(id: number) {
    var self = this;
    return new Promise(function(resolve, reject) {
      return self.getHeroes()
        .then(function(heroes) {
          var h = heroes.find(function(hero) {return hero.id === id;});
          resolve(h);
        });
    });
  };

  getHero2(id: number) {
    return this.getHeroes()
      .then(heroes => heroes.find(hero => hero.id === id));
  }

}
import { Injectable } from '@angular/core';

import { HEROES } from './mock-heroes';

@Injectable()
export class HeroService {
  getHeroes() {
    return new Promise(function(resolve, reject) {
      resolve(HEROES);
    });
  }
}
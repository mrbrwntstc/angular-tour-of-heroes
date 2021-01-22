import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';

import { MessageService } from './message.service';

/**
 * Component objects shouldn't fetch or save data directly
 * They also shouldn't knowingly present fake data
 * All Component objects should focus on is presenting data
 * Components should delegate data access to a service
 * 
 * Services are a great way to share information among classes that don't know about each other
 * 
 * Dependency Injection is a design pattern in which a class requests dependencies from external sources
 * rather than creating them
 */
@Injectable({
  // declares that this service should be created
  // by the root application injector
  providedIn: 'root'
})
export class HeroService {

  /**
   * the parameter will declare a private service property
   * because of the dependency injection (DI) design pattern, HeroService
   * will become aware of the field since angular will inject the property with a singleton
   * 
   * service-in-service is a typical development scenario
   * @param messageService 
   */
  constructor(private messageService: MessageService) { }

  /**
   * of() is a way to simulate retrieving data from a server
   * this is more similar to how apps will retrieve data
   */
  getHeroes(): Observable<Hero[]> {
    // TODO: send message _after_ fetching heroes
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }
}

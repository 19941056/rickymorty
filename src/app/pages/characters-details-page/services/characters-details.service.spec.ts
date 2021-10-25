import { TestBed } from '@angular/core/testing';

import { CharactersDetailsService } from './characters-details.service';

describe('CharactersDetailsService', () => {
  let service: CharactersDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CharactersDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

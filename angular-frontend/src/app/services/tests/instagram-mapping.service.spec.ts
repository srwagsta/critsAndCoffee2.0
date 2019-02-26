import { TestBed } from '@angular/core/testing';

import { InstagramMappingService } from '../instagram-mapping.service';

describe('InstagramMappingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InstagramMappingService = TestBed.get(InstagramMappingService);
    expect(service).toBeTruthy();
  });
});

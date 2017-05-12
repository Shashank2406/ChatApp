/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ConnectorService } from './connector.service';

describe('ConnectorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConnectorService]
    });
  });

  it('should ...', inject([ConnectorService], (service: ConnectorService) => {
    expect(service).toBeTruthy();
  }));
});

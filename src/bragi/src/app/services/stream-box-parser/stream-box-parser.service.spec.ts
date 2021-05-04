import { TestBed } from '@angular/core/testing';

import { StreamBoxParserService } from './stream-box-parser.service';

describe('StreamBoxParserService', () => {
  let service: StreamBoxParserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StreamBoxParserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

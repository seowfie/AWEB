import { TestBed } from '@angular/core/testing';
// REQUIRED: You must import this module to test services that use HttpClient
import { HttpClientTestingModule } from '@angular/common/http/testing';

// CHECK PATH: Ensure this points to 'data.service.ts' (standard) or 'dataservice.ts' (your file)
import { DataService } from './dataservice';

describe('DataService', () => {
  let service: DataService; // Fixed capitalization (DataService, not Dataservice)

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule] // <--- Needed to prevent "No provider for HttpClient" error
    });
    service = TestBed.inject(DataService); // Fixed capitalization
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

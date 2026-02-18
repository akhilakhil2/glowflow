import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NailsDropwown } from './nails-dropwown';

describe('NailsDropwown', () => {
  let component: NailsDropwown;
  let fixture: ComponentFixture<NailsDropwown>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NailsDropwown]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NailsDropwown);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

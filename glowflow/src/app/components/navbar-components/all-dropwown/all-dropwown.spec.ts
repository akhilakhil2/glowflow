import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllDropwown } from './all-dropwown';

describe('AllDropwown', () => {
  let component: AllDropwown;
  let fixture: ComponentFixture<AllDropwown>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllDropwown]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllDropwown);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

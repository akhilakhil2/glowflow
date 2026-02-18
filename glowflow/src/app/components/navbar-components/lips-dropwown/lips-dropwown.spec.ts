import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LipsDropwown } from './lips-dropwown';

describe('LipsDropwown', () => {
  let component: LipsDropwown;
  let fixture: ComponentFixture<LipsDropwown>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LipsDropwown]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LipsDropwown);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

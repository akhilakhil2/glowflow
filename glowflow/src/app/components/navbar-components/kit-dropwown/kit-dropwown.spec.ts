import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KitDropwown } from './kit-dropwown';

describe('KitDropwown', () => {
  let component: KitDropwown;
  let fixture: ComponentFixture<KitDropwown>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KitDropwown]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KitDropwown);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

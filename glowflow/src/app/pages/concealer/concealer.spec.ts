import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Concealer } from './concealer';

describe('Concealer', () => {
  let component: Concealer;
  let fixture: ComponentFixture<Concealer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Concealer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Concealer);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

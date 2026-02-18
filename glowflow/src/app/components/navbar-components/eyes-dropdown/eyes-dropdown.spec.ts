import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EyesDropdown } from './eyes-dropdown';

describe('EyesDropdown', () => {
  let component: EyesDropdown;
  let fixture: ComponentFixture<EyesDropdown>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EyesDropdown]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EyesDropdown);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

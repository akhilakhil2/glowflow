import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MakeupDropdown } from './makeup-dropdown';

describe('MakeupDropdown', () => {
  let component: MakeupDropdown;
  let fixture: ComponentFixture<MakeupDropdown>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MakeupDropdown]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MakeupDropdown);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

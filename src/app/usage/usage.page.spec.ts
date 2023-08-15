import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsagePage } from './usage.page';

describe('UsagePage', () => {
  let component: UsagePage;
  let fixture: ComponentFixture<UsagePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsagePage],
    }).compileComponents();

    fixture = TestBed.createComponent(UsagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

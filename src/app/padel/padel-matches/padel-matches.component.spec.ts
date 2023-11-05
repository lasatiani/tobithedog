import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PadelMatchesComponent } from './padel-matches.component';

describe('PadelMatchesComponent', () => {
  let component: PadelMatchesComponent;
  let fixture: ComponentFixture<PadelMatchesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PadelMatchesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PadelMatchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PadelMatchComponent } from './padel-match.component';

describe('PadelMatchComponent', () => {
  let component: PadelMatchComponent;
  let fixture: ComponentFixture<PadelMatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PadelMatchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PadelMatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

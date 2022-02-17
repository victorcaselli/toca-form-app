import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscipleListComponent } from './disciple-list.component';

describe('DiscipleListComponent', () => {
  let component: DiscipleListComponent;
  let fixture: ComponentFixture<DiscipleListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiscipleListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscipleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

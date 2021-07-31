import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketeraComponent } from './ticketera.component';

describe('TicketeraComponent', () => {
  let component: TicketeraComponent;
  let fixture: ComponentFixture<TicketeraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TicketeraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketeraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

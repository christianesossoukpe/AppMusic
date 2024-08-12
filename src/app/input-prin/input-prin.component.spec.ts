import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputPrinComponent } from './input-prin.component';

describe('InputPrinComponent', () => {
  let component: InputPrinComponent;
  let fixture: ComponentFixture<InputPrinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InputPrinComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InputPrinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

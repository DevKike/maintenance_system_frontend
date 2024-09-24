import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimengToolbarComponent } from './primeng-toolbar.component';

describe('PrimengToolbarComponent', () => {
  let component: PrimengToolbarComponent;
  let fixture: ComponentFixture<PrimengToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PrimengToolbarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PrimengToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

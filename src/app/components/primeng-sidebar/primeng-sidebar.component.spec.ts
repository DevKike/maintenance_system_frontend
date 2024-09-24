import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimengSidebarComponent } from './primeng-sidebar.component';

describe('PrimengSidebarComponent', () => {
  let component: PrimengSidebarComponent;
  let fixture: ComponentFixture<PrimengSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PrimengSidebarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PrimengSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

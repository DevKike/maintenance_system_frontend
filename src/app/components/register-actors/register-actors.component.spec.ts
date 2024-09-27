import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterActorsComponent } from './register-actors.component';

describe('RegisterActorsComponent', () => {
  let component: RegisterActorsComponent;
  let fixture: ComponentFixture<RegisterActorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegisterActorsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegisterActorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

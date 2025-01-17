import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupLoginComponent } from './signup-login.component';

describe('LoginSignup', () => {
  let component: SignupLoginComponent;
  let fixture: ComponentFixture<SignupLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignupLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

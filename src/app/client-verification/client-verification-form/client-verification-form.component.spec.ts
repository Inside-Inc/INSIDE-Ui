import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientVerificationFormComponent } from './client-verification-form.component';

describe('ClientVerificationFormComponent', () => {
  let component: ClientVerificationFormComponent;
  let fixture: ComponentFixture<ClientVerificationFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientVerificationFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientVerificationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CritsAccountSettingsComponent } from './crits-account-settings.component';

describe('CritsAccountSettingsComponent', () => {
  let component: CritsAccountSettingsComponent;
  let fixture: ComponentFixture<CritsAccountSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CritsAccountSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CritsAccountSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

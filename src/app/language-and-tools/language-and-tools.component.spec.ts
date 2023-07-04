import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguageAndToolsComponent } from './language-and-tools.component';

describe('LanguageAndToolsComponent', () => {
  let component: LanguageAndToolsComponent;
  let fixture: ComponentFixture<LanguageAndToolsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [LanguageAndToolsComponent]
    });
    fixture = TestBed.createComponent(LanguageAndToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

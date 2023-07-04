import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyMostUsedLanguagesComponent } from './my-most-used-languages.component';

describe('MyMostUsedLanguagesComponent', () => {
  let component: MyMostUsedLanguagesComponent;
  let fixture: ComponentFixture<MyMostUsedLanguagesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MyMostUsedLanguagesComponent]
    });
    fixture = TestBed.createComponent(MyMostUsedLanguagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyOpenSourceComponent } from './my-open-source.component';

describe('MyOpenSourceComponent', () => {
  let component: MyOpenSourceComponent;
  let fixture: ComponentFixture<MyOpenSourceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MyOpenSourceComponent]
    });
    fixture = TestBed.createComponent(MyOpenSourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

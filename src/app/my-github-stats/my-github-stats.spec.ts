import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyGithubStatsComponent } from './my-github-stats';

describe('MyGithubStatsComponent', () => {
  let component: MyGithubStatsComponent;
  let fixture: ComponentFixture<MyGithubStatsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MyGithubStatsComponent],
    });
    fixture = TestBed.createComponent(MyGithubStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

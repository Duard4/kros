import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lab4Page } from './lab4.page';
import { waitForAsync } from '@angular/core/testing';

describe('Lab4Page', () => {
  let component: Lab4Page;
  let fixture: ComponentFixture<Lab4Page>;

  beforeEach(waitForAsync(() => {
    fixture = TestBed.createComponent(Lab4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

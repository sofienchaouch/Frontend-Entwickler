import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from 'protractor';
import { AddUserComponent } from './add-user/add-user.component';
import { AppComponent } from './app.component';
import { UpdateUserComponent } from './update-user/update-user.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'HelloWorld'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('HelloWorld');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('HelloWorld app is running!');
  });
  describe('PersonComponent', () => {
    let component: AddUserComponent;
    let fixture: ComponentFixture<AddUserComponent>;
  
    beforeEach(() => {
      TestBed.configureTestingModule({
        declarations: [AddUserComponent]
      });
      fixture = TestBed.createComponent(AddUserComponent);
      component = fixture.componentInstance;
    });
  

});
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NovaFestaPage } from './nova-festa.page';

describe('NovaFestaPage', () => {
  let component: NovaFestaPage;
  let fixture: ComponentFixture<NovaFestaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NovaFestaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NovaFestaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

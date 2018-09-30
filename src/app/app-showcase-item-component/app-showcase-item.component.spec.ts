import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AppShowcaseItemComponent} from './app-showcase-item.component';
import {ShoppingCartModule} from './../shopping-cart/shopping-cart.module';
import {CartService} from './../shopping-cart/services/cart.service';
import {MemoryCartService} from './../shopping-cart/services/memory-cart.service';
import {AppCartItem} from './../app-cart-item';

describe('AppShowcaseItemComponent', () => {
  let component: AppShowcaseItemComponent;
  let fixture: ComponentFixture<AppShowcaseItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppShowcaseItemComponent,
      ],
      imports: [
        ShoppingCartModule,
      ],
      providers: [
        {provide: CartService, useClass: MemoryCartService}
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppShowcaseItemComponent);
    component = fixture.componentInstance;
    component.item = new AppCartItem();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

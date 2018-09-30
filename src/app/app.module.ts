import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
//
// App is our top level component
import { AppComponent } from './app.component';
import { ErrorComponent } from './error/error.component';
import { NoContentComponent } from './no-content/no-content.component';
import { AppCartItem } from './app-cart-item';
//
import { AppShowcaseItemComponent } from './app-showcase-item-component/app-showcase-item.component';
/*
 * Platform and Environment providers/directives/pipes
 */

//
import { LayoutModule } from "./layout/layout.module";
//
import { ShoppingCartModule } from './shopping-cart/shopping-cart.module';


import { environment } from 'environments/environment';
import { ROUTES } from './app.routes';

import { APP_RESOLVER_PROVIDERS } from './app.resolver';
import { AppState, InternalStateType } from './app.service';

import '../styles/styles.scss';
import '../styles/headings.css';

// Application wide providers
const APP_PROVIDERS = [
  ...APP_RESOLVER_PROVIDERS,
  { provide: LOCALE_ID, useValue: 'es-ES' },
  AppState
];

interface StoreType {
  state: InternalStateType;
  restoreInputValues: () => void;
  disposeOldHosts: () => void;
}
//Registering local data
registerLocaleData(localeEs);
/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    ErrorComponent,
    NoContentComponent,
    AppShowcaseItemComponent
  ],
  /**
   * Import Angular's modules.
   */
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES, {
      useHash: Boolean(history.pushState) === false,
      preloadingStrategy: PreloadAllModules
    }),
    ShoppingCartModule.forRoot({
      itemType: AppCartItem,
      serviceType: 'sessionStorage',
      serviceOptions: { storageKey: 'tdias', clearOnError: true },
    }),
    LayoutModule,
    /**
     * This section will import the `DevModuleModule` only in certain build types.
     * When the module is not imported it will get tree shaked.
     * This is a simple example, a big app should probably implement some logic
     */
    ...environment.showDevModule ? [] : []


  ],
  /**
   * Expose our Services and Providers into Angular's dependency injection.
   */
  providers: [
    environment.ENV_PROVIDERS,
    APP_PROVIDERS
  ],
  entryComponents: [AppShowcaseItemComponent]
})
export class AppModule { }

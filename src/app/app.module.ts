import {AppComponent} from './app.component';
import {StateService} from './common/services';
import {AppRoutingModule} from './app-routing.module';
import {APP_INITIALIZER, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {initializeAppFactory} from './common/initializes';
import {HomeComponent} from './components/home/home.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [{
    provide: APP_INITIALIZER,
    useFactory: initializeAppFactory,
    deps: [HttpClient, StateService],
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule {
}

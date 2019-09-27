import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import {FormsModule} from '@angular/forms';
import {VrHttp} from './vr.http';
import {VrService} from './vr.service';
import {VrSharedState} from './vr.shared-state';
import {HttpClientModule} from '@angular/common/http';
import {AsyncLocalStorageModule} from 'angular-async-local-storage';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AsyncLocalStorageModule
  ],
  providers: [VrSharedState,VrHttp],
  bootstrap: [AppComponent]
})
export class AppModule { }

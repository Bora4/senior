import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResultComponent } from './result/result.component';
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const config: SocketIoConfig = { url: 'http://localhost:55555', options: {} };

@NgModule({
  declarations: [
    AppComponent,
    ResultComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SocketIoModule.forRoot(config)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

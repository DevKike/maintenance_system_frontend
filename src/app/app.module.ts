import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimengSidebarModule } from './components/primeng-sidebar/primeng-sidebar.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PrimengToolbarModule } from './components/primeng-toolbar/primeng-toolbar.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    PrimengSidebarModule,
    PrimengToolbarModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

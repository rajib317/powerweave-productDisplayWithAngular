import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShowcaseComponent } from './components/showcase/showcase.component';
import { RelatedComponent } from './components/related/related.component';
import { ItemComponent } from './components/related/item/item.component';

@NgModule({
  declarations: [
    AppComponent,
    ShowcaseComponent,
    RelatedComponent,
    ItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

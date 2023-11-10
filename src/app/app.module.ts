import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HousingLocationComponent } from './housing-location/housing-location.component';
import { CommonModule } from '@angular/common';
@NgModule({
  declarations: [
    AppComponent,
    //sino no tiene STANDALONE va aqui
    NavbarComponent,
    HomeComponent,
    HousingLocationComponent,
  ],
  imports: [
    //aqui van las dependencias
    BrowserModule,
    AppRoutingModule,
    CommonModule
    //aqui van los de components con STANDALONE TRUE
  ],
  providers: [],
  bootstrap: [AppComponent]
})
/*selector: to describe how Angular refers to the component in templates.
standalone: to describe whether the component requires a NgModule.
imports: to describe the component's dependencies.
template: to describe the component's HTML markup and layout.
styleUrls: to list the URLs of the CSS files that the component uses in an array.*/

export class AppModule { }


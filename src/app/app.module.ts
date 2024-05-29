import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { ViewComponent } from './view/view.component';
import { ReactiveFormsModule } from '@angular/forms';

import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './view/header/header.component';
import { BannerComponent } from './view/banner/banner.component';
import { AboutComponent } from './view/about/about.component';
import { EducationComponent } from './view/education/education.component';
import { ExperiencesComponent } from './view/experiences/experiences.component';
import { ContactComponent } from './view/contact/contact.component';


@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    ViewComponent,
    HeaderComponent,
    BannerComponent,
    AboutComponent,
    EducationComponent,
    ExperiencesComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

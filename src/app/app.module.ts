import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './portfolio/components/home/home.component';
import { TestimonialsComponent } from './portfolio/components/testimonials/testimonials.component';
import { ContactmeComponent } from './portfolio/components/contactme/contactme.component';
import { HeaderComponent } from './core/components/header/header.component';
import { FooterComponent } from './core/components/footer/footer.component';
import { AboutComponent } from './portfolio/components/about/about.component';
import { ResumeComponent } from './portfolio/components/resume/resume.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TestimonialsComponent,
    ContactmeComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    ResumeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './portfolio/components/home/home.component';
import { TestimonialsComponent } from './portfolio/components/testimonials/testimonials.component';
import { ContactmeComponent } from './portfolio/components/contactme/contactme.component';
import { HeaderComponent } from './core/components/header/header.component';
import { FooterComponent } from './core/components/footer/footer.component';
import { AboutComponent } from './portfolio/components/about/about.component';
import { ResumeComponent } from './portfolio/components/resume/resume.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PortfolioComponent } from './portfolio/components/portfolio/portfolio.component';
import { MyServicesComponent } from './portfolio/components/my-services/my-services.component';
import { ProjectsComponent } from './portfolio/components/projects/projects.component';
import { ProjectsDetailsComponent } from './portfolio/components/projects-details/projects-details.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TestimonialsComponent,
    ContactmeComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    ResumeComponent,
    PortfolioComponent,
    MyServicesComponent,
    ProjectsComponent,
    ProjectsDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgbModule,    
    BrowserAnimationsModule,
    CarouselModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

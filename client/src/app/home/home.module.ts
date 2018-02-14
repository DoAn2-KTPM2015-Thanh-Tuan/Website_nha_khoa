import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeRoutingModule } from './home-routing.module';
import { SlickModule } from 'ngx-slick';
import { HttpModule } from '@angular/http';

import { HomeComponent } from './home.component';
import { HeaderComponent } from './header/header.component';
import { SliderComponent } from './slider/slider.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { NewsCategorysComponent } from './news-categorys/news-categorys.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ListDoctorsComponent } from './list-doctors/list-doctors.component';
import { ListServicesComponent } from './list-services/list-services.component';

import { SliderService } from './service/slider.service';
import { NewsService } from './service/news.service';
@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    SlickModule.forRoot(),
    HttpModule
  ],
  declarations: [
    HomeComponent, 
    HeaderComponent, 
    SliderComponent, 
    FooterComponent, 
    ContentComponent, 
    NewsCategorysComponent, 
    SidebarComponent, 
    ListDoctorsComponent, ListServicesComponent
  ],
  providers: [
    SliderService,
    NewsService
  ]
})
export class HomeModule { }

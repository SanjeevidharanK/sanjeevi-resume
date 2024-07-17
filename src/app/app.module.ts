import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BasicContentComponent } from './basic-content/basic-content.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeContentComponent } from './home-content/home-content.component';
import { ExperienceContentModule } from './experience-content/experience-content.module';
import { ContactComponent } from './contact/contact.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    BasicContentComponent,
    HomeContentComponent,
    ContactComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,ReactiveFormsModule,
    ExperienceContentModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

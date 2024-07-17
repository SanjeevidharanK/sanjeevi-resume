import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicContentComponent } from './basic-content/basic-content.component';
import { AppComponent } from './app.component';
import { HomeContentComponent } from './home-content/home-content.component';
import { ExperienceContentComponent } from './experience-content/experience-content.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [{path:"",component:BasicContentComponent},
  {path:"home",component:HomeContentComponent},
  {path:"experience",
    loadChildren: () => import('../app/experience-content/experience-content.module').then(m => m.ExperienceContentModule)},
    {path:"contact",component:ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

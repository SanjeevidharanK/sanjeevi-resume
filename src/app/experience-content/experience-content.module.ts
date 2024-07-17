import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExperienceContentComponent } from './experience-content.component';
import { RouterModule, Routes } from '@angular/router';
import { ExpVysComponent } from './exp-vys/exp-vys.component';
import { ExpBbComponent } from './exp-bb/exp-bb.component';

const routes: Routes = [
  { path: '', component: ExperienceContentComponent },
  { path: 'vys', component: ExpVysComponent },
  { path: 'bb', component: ExpBbComponent },
];

@NgModule({
  declarations: [ExperienceContentComponent,ExpBbComponent,ExpVysComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [],
})
export class ExperienceContentModule {}

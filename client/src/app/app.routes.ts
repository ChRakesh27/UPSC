import { Routes } from '@angular/router';
import { TopperComponent } from './topper/topper.component';
import { AddTopicsComponent } from './add-topics/add-topics.component';
import { TopicListComponent } from './topic-list/topic-list.component';
import { TopperListComponent } from './topper-list/topper-list.component';
import { TopicComponent } from './topic/topic.component';
import { AddTopperComponent } from './add-topper/add-topper.component';

export const routes: Routes = [
  {
    path: 'toppers',
    component: TopperListComponent,
    data: {}
  },
  {
    path: 'toppers/:id',
    component: TopicListComponent,
  },
  {
    path: 'toppers/:id/topics/:id',
    component: TopicComponent,
  },
  { path: 'add-toppers', component: AddTopperComponent },
  { path: 'add-topics', component: AddTopicsComponent },
  { path: '', redirectTo: '/toppers', pathMatch: 'full' },
];

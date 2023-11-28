import { Routes } from '@angular/router';
import { TopperComponent } from './topper/topper.component';
import { AddTopicsComponent } from './add-topics/add-topics.component';
import { TopicListComponent } from './topic-list/topic-list.component';
import { TopperListComponent } from './topper-list/topper-list.component';

export const routes: Routes = [
    { path: 'topicList/:id', component: TopicListComponent },
    { path: 'topperList', component: TopperListComponent },
    { path: 'add-topper', component: TopperComponent },
    { path: 'add-topics', component: AddTopicsComponent },
    { path: '', redirectTo: '/topperList', pathMatch: 'full' }
];

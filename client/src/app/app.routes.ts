import { Routes } from '@angular/router';
import { TopperComponent } from './topper/topper.component';
import { AddTopicsComponent } from './add-topics/add-topics.component';
import { TopicListComponent } from './topic-list/topic-list.component';
import { TopperListComponent } from './topper-list/topper-list.component';
import { TopicComponent } from './topic/topic.component';

export const routes: Routes = [
    { path: 'topicList/:id', component: TopicListComponent },
    { path: 'topperList', component: TopperListComponent },
    { path: 'add-topper', component: TopperComponent },
    { path: 'add-topics', component: AddTopicsComponent },
    { path: 'topic', component: TopicComponent },
    { path: '', redirectTo: '/topperList', pathMatch: 'full' }
];

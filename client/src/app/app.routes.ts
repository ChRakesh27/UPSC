import { Routes } from '@angular/router';
import { TopperComponent } from './topper/topper.component';
import { AddAnswersComponent } from './add-answers/add-answers.component';
import { TopicListComponent } from './topic-list/topic-list.component';

export const routes: Routes = [
    { path: 'topicList', component: TopicListComponent },
    { path: 'add-topper', component: TopperComponent },
    { path: 'add-answers', component: AddAnswersComponent },
    { path: '', redirectTo: '/topicList', pathMatch: 'full' }
];

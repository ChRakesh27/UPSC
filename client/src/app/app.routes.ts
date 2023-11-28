import { Routes } from '@angular/router';
import { TopperComponent } from './topper/topper.component';
import { AddTopicsComponent } from './add-topics/add-topics.component';
import { TopicListComponent } from './topic-list/topic-list.component';
import { TopperListComponent } from './topper-list/topper-list.component';
import { TopicComponent } from './topic/topic.component';

export const routes: Routes = [
    {
        path: 'toppers',
        component: TopperListComponent,
        // children: [
        //     {
        //         path: ":id",
        //         component: TopicListComponent
        //     }
        // ]
    },
    {
        path: "toppers/:id",
        component: TopicListComponent
    },
    {
        path: "toppers/:id/topics/:id",
        component: TopicComponent
    },
    { path: 'addToppers', component: TopperComponent },
    { path: 'addTopics', component: AddTopicsComponent },
    { path: '', redirectTo: '/toppers', pathMatch: 'full' },
];

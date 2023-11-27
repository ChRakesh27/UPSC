import { Routes } from '@angular/router';
import { TopperComponent } from './topper/topper.component';
import { AddAnswersComponent } from './add-answers/add-answers.component';

export const routes: Routes = [
    { path: 'add-topper', component: TopperComponent },
    { path: 'add-answers', component: AddAnswersComponent },
    { path: '', redirectTo: '/add-answers', pathMatch: 'full' }
];

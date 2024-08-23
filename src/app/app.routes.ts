import { Routes } from '@angular/router';
import { UserAuthComponent } from './components/user-auth/user-auth.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'user-auth',
        component: UserAuthComponent
    }
];

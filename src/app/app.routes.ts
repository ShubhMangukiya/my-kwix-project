import { Routes } from '@angular/router';
import { UserAuthComponent } from './components/user-auth/user-auth.component';
import { HomeComponent } from './components/home/home.component';
import { UsComponent } from './components/us/us.component';
import { FeaturesPageComponent } from './components/features-page/features-page.component';
import { SupportPageComponent } from './components/support-page/support-page.component';
import { WhatWeDoPageComponent } from './components/what-we-do-page/what-we-do-page.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'user-auth',
        component: UserAuthComponent
    },
    {
        path: 'features',
        component: FeaturesPageComponent
    },
    {
        path: 'support',
        component: SupportPageComponent
    },
    {
        path: 'what-we-do',
        component: WhatWeDoPageComponent
    },
    {
        path: 'us',
        component: UsComponent
    }
];

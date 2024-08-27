import { Routes } from '@angular/router';
import { UserAuthComponent } from './components/user-auth/user-auth.component';
import { HomeComponent } from './components/home/home.component';
import { UsComponent } from './components/us/us.component';
import { WhatWeDoPageComponent } from './components/what-we-do-page/what-we-do-page.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { ServicesComponent } from './components/services/services.component';

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
        path: 'blogs',
        component: BlogsComponent
    },
    {
        path: 'services',
        component: ServicesComponent
    },
    {
        path: 'what-we-do',
        component: WhatWeDoPageComponent
    },
    {
        path: 'us',
        component: UsComponent
    },
    {
        path: 'contact-us',
        component: ContactUsComponent
    }
];

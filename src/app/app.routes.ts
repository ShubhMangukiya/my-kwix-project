import { Routes } from '@angular/router';
import { UserAuthComponent } from './components/user-auth/user-auth.component';
import { HomeComponent } from './components/home/home.component';
import { UsComponent } from './components/us/us.component';
import { WhatWeDoPageComponent } from './components/what-we-do-page/what-we-do-page.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { ServicesComponent } from './components/services/services.component';
import { LinkInBioComponent } from './components/link-in-bio/link-in-bio.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: 'Kwix.Home'
    },
    {
        path: 'user-auth',
        component: UserAuthComponent,
        title: 'Kwix.User.Login'
    },
    {
        path: 'blogs',
        component: BlogsComponent,
        title: 'Kwix.Blog'
    },
    {
        path: 'services',
        component: ServicesComponent,
        title: 'Kwix.Services'
    },
    {
        path: 'what-we-do',
        component: WhatWeDoPageComponent
    },
    {
        path: 'us',
        component: UsComponent,
        title: 'Kwix.Aboutus'
    },
    {
        path: 'contact-us',
        component: ContactUsComponent,
        title: 'Kwix.Contactus'
    }
];

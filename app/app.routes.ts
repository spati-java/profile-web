import { provideRouter, RouterConfig } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {homeRoutes} from "./home/home.routes";

const routes: RouterConfig = [
    ...homeRoutes,
    { path: 'home', component: HomeComponent},
    { path: '**', component: HomeComponent}

];

export const appRouterProviders = [
    provideRouter(routes)
];
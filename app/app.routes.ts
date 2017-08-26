import { provideRouter, RouterConfig } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {homeRoutes} from "./home/home.routes";
import { SkillsComponent } from "./skills/skills.component";

const routes: RouterConfig = [
    ...homeRoutes,
    { path: 'home', component: HomeComponent},
    { path: 'skills', component: SkillsComponent},
    { path: '**', component: HomeComponent}

];

export const appRouterProviders = [
    provideRouter(routes)
];
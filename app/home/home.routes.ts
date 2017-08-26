import { RouterConfig }         from '@angular/router';

import {ProfileComponent} from "../profile/profile.component";
import { SkillsComponent } from "../skills/skills.component";
import { PublicationsComponent } from "../publications/publications.component";

export const homeRoutes: RouterConfig = [
{ path: 'publications/:id', component: PublicationsComponent},
{ path: 'profile/:id', component: ProfileComponent}
]
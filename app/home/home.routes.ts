import { RouterConfig }         from '@angular/router';

import {ProfileComponent} from "../profile/profile.component";


export const homeRoutes: RouterConfig = [
    
{ path: 'profile/:id', component: ProfileComponent}

];
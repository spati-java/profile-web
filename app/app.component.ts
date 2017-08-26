import {Component} from '@angular/core';
import {NavbarComponent} from "./navbar/navabr.component";
import {ROUTER_DIRECTIVES} from '@angular/router'
import {HomeComponent} from "./home/home.component";
import {ProfileComponent} from "./profile/profile.component";
import { SkillsComponent } from "./skills/skills.component";

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    styleUrls: ['app/app.component.css'],
    directives: [NavbarComponent, HomeComponent,ROUTER_DIRECTIVES],
    precompile: [HomeComponent, ProfileComponent]
})
export class AppComponent {
    title = 'Invoice Details';
}



import {OnInit, Component} from "@angular/core";
import {WebService} from "./web-service.model";
import {Router, ROUTER_DIRECTIVES} from "@angular/router";
import {Profile} from "../profile/profile.model";
import {ProfileService } from "../profile/profile.service"
@Component({
    moduleId:module.id,
    templateUrl:'home.component.html',
    styleUrls:['home.component.css'],
    directives:[ROUTER_DIRECTIVES],
    providers:[ProfileService]
})
export class HomeComponent implements OnInit{

    profile:Profile;
    constructor(private router: Router , private service:ProfileService){}
    ngOnInit() {
     this.getProfile();
    }

    getProfile(){
        this.service.getProfile().subscribe(profile => this.profile = profile);
    }

    onGoToProfile(id){
        this.router.navigate(['/profile', id]);
    }

    onGoToSkills(id){
        this.router.navigate(['/skills', id]);
    }
    onGoToPublications(id){
        this.router.navigate(['/publications', id]);
    }
}
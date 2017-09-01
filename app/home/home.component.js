"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var profile_service_1 = require("../profile/profile.service");
var HomeComponent = (function () {
    function HomeComponent(router, service) {
        this.router = router;
        this.service = service;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.getProfile();
    };
    HomeComponent.prototype.getProfile = function () {
        var _this = this;
        this.service.getProfile().subscribe(function (profile) { return _this.profile = profile; });
    };
    HomeComponent.prototype.onGoToProfile = function (id) {
        this.router.navigate(['/profile', id]);
    };
    HomeComponent.prototype.onGoToSkills = function (id) {
        this.router.navigate(['/skills', id]);
    };
    HomeComponent.prototype.onGoToPublications = function (id) {
        this.router.navigate(['/publications', id]);
    };
    HomeComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: 'home.component.html',
            styleUrls: ['home.component.css'],
            directives: [router_1.ROUTER_DIRECTIVES],
            providers: [profile_service_1.ProfileService]
        }), 
        __metadata('design:paramtypes', [router_1.Router, profile_service_1.ProfileService])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map
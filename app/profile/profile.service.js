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
var http_1 = require("@angular/http");
var ProfileService = (function () {
    function ProfileService(http) {
        this.http = http;
        // set the header for authentication
        this.header = new http_1.Headers({
            'Content-Type': 'application/json'
        });
        this.options = new http_1.RequestOptions({ headers: this.header });
    }
    ProfileService.prototype.getAllProfile = function () {
        return this.http.get('http://35.166.219.25/').map(function (res) { return res.json(); });
    };
    ProfileService.prototype.search = function (term) {
        return this.http
            .get("http://localhost:8080/profile/search?query=" + term, this.options)
            .map(function (res) { return res.json(); });
    };
    ProfileService.prototype.autoComplete = function (term) {
        return this.http
            .get("http://localhost:8080/profile/auto-search?field=name&value=" + term, this.options)
            .map(function (res) { return res.json(); });
    };
    ProfileService.prototype.searchByTitle = function (term) {
        return this.http
            .get("http://localhost:8080/profile/title-search?field=title&value=" + term, this.options)
            .map(function (res) { return res.json(); });
    };
    ProfileService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], ProfileService);
    return ProfileService;
}());
exports.ProfileService = ProfileService;
//# sourceMappingURL=profile.service.js.map
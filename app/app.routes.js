"use strict";
var router_1 = require('@angular/router');
var home_component_1 = require("./home/home.component");
var home_routes_1 = require("./home/home.routes");
var skills_component_1 = require("./skills/skills.component");
var routes = home_routes_1.homeRoutes.concat([
    { path: 'home', component: home_component_1.HomeComponent },
    { path: 'skills', component: skills_component_1.SkillsComponent },
    { path: '**', component: home_component_1.HomeComponent }
]);
exports.appRouterProviders = [
    router_1.provideRouter(routes)
];
//# sourceMappingURL=app.routes.js.map
"use strict";
var profile_component_1 = require("../profile/profile.component");
var publications_component_1 = require("../publications/publications.component");
exports.homeRoutes = [
    { path: 'publications/:id', component: publications_component_1.PublicationsComponent },
    { path: 'profile/:id', component: profile_component_1.ProfileComponent }
];
//# sourceMappingURL=home.routes.js.map
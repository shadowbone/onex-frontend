"use strict";
var router_1 = require('@angular/router');
var AuthGuard_1 = require('./providers/AuthGuard');
var index_1 = require('./components/index');
var appRoutes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: index_1.LoginComponent },
    { path: 'home', component: index_1.HomeComponent, canActivate: [AuthGuard_1.AuthGuard], children: [
            { path: '', component: index_1.MasterSoal },
            { path: 'master-soal', component: index_1.MasterSoal },
            { path: 'soal', component: index_1.UjianComponent }
        ] },
    { path: '**', component: index_1.LoginComponent }
];
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map
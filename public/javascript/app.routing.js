"use strict";
var router_1 = require('@angular/router');
var login_component_1 = require('./components/login/login.component');
var app_component_1 = require('./components/app/app.component');
var appRoutes = [
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: app_component_1.AppComponent,
        data: {
            title: 'Heroes List'
        }
    },
    {
        path: 'login',
        component: login_component_1.LoginComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map
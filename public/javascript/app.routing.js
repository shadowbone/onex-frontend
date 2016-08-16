"use strict";
var router_1 = require('@angular/router');
var index_1 = require('./components/index');
var appRoutes = [
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: index_1.AppComponent,
        data: {
            title: 'Heroes List'
        }
    },
    {
        path: 'login',
        component: index_1.LoginComponent
    },
    {
        path: 'master/soal',
        component: index_1.MasterSoal
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map
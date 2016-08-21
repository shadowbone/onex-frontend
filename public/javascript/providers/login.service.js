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
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var router_1 = require("@angular/router");
var Rx_1 = require("rxjs/Rx");
require('rxjs/add/operator/toPromise');
var GlobalService_1 = require('./GlobalService');
var LoginService = (function () {
    function LoginService(http, route) {
        this.http = http;
        this.route = route;
    }
    LoginService.prototype.getData = function () {
        var jwt = GlobalService_1.global.token;
        var authHeader = new http_1.Headers();
        if (jwt) {
            authHeader.append('Authorization', 'Bearer ' + jwt);
        }
        return this.http.get(GlobalService_1.global.apiUrl + 'ahay', { headers: authHeader });
    };
    LoginService.prototype.postData = function (url, data) {
        if (url === void 0) { url = ''; }
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        headers.append('Content-Type', 'application/json');
        return this.http
            .post(GlobalService_1.global.apiUrl + url, data, { headers: headers });
    };
    LoginService.prototype.logout = function () {
        localStorage.clear();
        this.route.navigate(['/login']);
    };
    LoginService.prototype.isAuth = function () {
        var subject = new Rx_1.Subject();
        var jwt = localStorage.getItem('id_token');
        var url = 'ahay';
        if (jwt == null) {
            subject.next(false);
        }
        else {
            var authHeader = new http_1.Headers();
            authHeader.append('Authorization', 'Bearer ' + jwt);
            this.http.get(GlobalService_1.global.apiUrl + url, { headers: authHeader })
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                subject.next(true);
            }, function (res) {
                subject.next(false);
            });
        }
        return subject.asObservable().take(1);
    };
    LoginService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    LoginService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, router_1.Router])
    ], LoginService);
    return LoginService;
}());
exports.LoginService = LoginService;
//# sourceMappingURL=login.service.js.map
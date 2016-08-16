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
require('rxjs/add/operator/toPromise');
var LoginService = (function () {
    function LoginService(http) {
        this.http = http;
        this.__token = localStorage.getItem('id_token');
    }
    LoginService.prototype.getData = function (url) {
        if (url === void 0) { url = null; }
        var jwt = localStorage.getItem('id_token');
        var authHeader = new http_1.Headers();
        if (jwt) {
            authHeader.append('Authorization', 'Bearer ' + jwt);
        }
        return this.http.get('http://localhost/api.onex/ahay', { headers: authHeader });
    };
    LoginService.prototype.postData = function (url, data) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        headers.append('Content-Type', 'application/json');
        return this.http
            .post(url, data, { headers: headers });
    };
    LoginService.prototype.putData = function () {
    };
    LoginService.prototype.deleteData = function () {
    };
    LoginService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    LoginService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], LoginService);
    return LoginService;
}());
exports.LoginService = LoginService;
//# sourceMappingURL=login.service.js.map
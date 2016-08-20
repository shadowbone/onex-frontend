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
var login_service_1 = require('../../providers/login.service');
var router_1 = require('@angular/router');
var LoginComponent = (function () {
    function LoginComponent(loginService, router) {
        this.loginService = loginService;
        this.router = router;
        this.hideElement = false;
        this.error = {};
        this.userForm = {};
        this.title = 'OnEx';
    }
    LoginComponent.prototype.getData = function () {
        var _this = this;
        return this.loginService.getData()
            .map(function (response) { return response.json(); }).
            subscribe(function (data) { return _this.data = data; }, function (error) { return console.error('Error: ' + error); }, function () { return console.log('Completed!'); });
    };
    LoginComponent.prototype.saveJwt = function (jwt) {
        if (jwt) {
            localStorage.setItem('id_token', jwt);
            var ceh = localStorage.getItem('id_token');
            console.log(ceh);
            console.log('Awal');
        }
    };
    LoginComponent.prototype.auth = function (auth) {
        if (auth) {
            localStorage.setItem('auth', JSON.stringify(auth));
        }
    };
    LoginComponent.prototype.postLogin = function () {
        var _this = this;
        var data = {
            email: this.userForm.email,
            password: this.userForm.password
        };
        return this.loginService
            .postData(data)
            .map(function (response) { return response.json(); })
            .subscribe(function (data) {
            _this.saveJwt(data.token);
            _this.auth(data.data);
            _this.userForm.email = null;
            _this.userForm.password = null;
            _this.router.navigate(['./home']);
        }, function (err) { return _this.validation(err.json()); }, function () { return console.log('Authentication Complete'); });
    };
    LoginComponent.prototype.validation = function (err) {
        var dataArray = [];
        this.error = {};
        for (var key in err) {
            this.error[key] = err[key][0];
        }
        return this.error;
    };
    LoginComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-login',
            templateUrl: 'index.html'
        }), 
        __metadata('design:paramtypes', [login_service_1.LoginService, router_1.Router])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map
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
var LoginComponent = (function () {
    function LoginComponent(loginService) {
        this.loginService = loginService;
        this.status = false;
        this.title = 'OnEx';
        this.apiUrl = 'http://localhost/api.onex/auth/login';
        this.model = {
            email: '',
            password: ''
        };
    }
    LoginComponent.prototype.OnInit = function () {
    };
    LoginComponent.prototype.getData = function () {
        var _this = this;
        return this.loginService.getData(this.apiUrl)
            .map(function (response) { return response.json(); }).
            subscribe(function (data) { return _this.data = data; }, function (error) { return console.error('Error: ' + error); }, function () { return console.log('Completed!'); });
    };
    LoginComponent.prototype.saveJwt = function (jwt) {
        if (jwt) {
            localStorage.setItem('id_token', jwt);
        }
    };
    LoginComponent.prototype.postLogin = function () {
        var _this = this;
        var dataPost = JSON.stringify({
            email: this.model.email,
            password: this.model.password
        });
        return this.loginService
            .postData(this.apiUrl, dataPost)
            .subscribe(function (data) {
            _this.saveJwt(data.json().token);
            _this.model.email = null;
            _this.model.password = null;
        }, function (err) { return _this.logError(err.json().message); }, function () { return console.log('Authentication Complete'); });
    };
    LoginComponent.prototype.logError = function (err) {
        console.error('There was an error: ' + err);
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'login',
            templateUrl: './src/components/login/index.html',
            providers: [login_service_1.LoginService]
        }), 
        __metadata('design:paramtypes', [login_service_1.LoginService])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map
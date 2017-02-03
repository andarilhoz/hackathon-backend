webpackJsonp([0,4],{

/***/ 1036:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(443);


/***/ }),

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(757);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__(415);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_BehaviorSubject__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__authentication_service__ = __webpack_require__(171);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var UserService = (function () {
    function UserService(http, authenticationService) {
        this.http = http;
        this.authenticationService = authenticationService;
        this.mainUrl = window.location.origin;
        this.baseUrl = this.mainUrl /*.substring(0,this.mainUrl.lastIndexOf(':')) + ':8000*/ + '/api/';
    }
    ;
    UserService.prototype.getAvatar = function (userId) {
        return this.http
            .get(this.baseUrl + ("usuario/" + userId + "/image"))
            .map(function (r) { return r.toString(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.json().errors || 'Server error'); });
    };
    UserService.prototype.getMe = function () {
        return this.http
            .get(this.baseUrl + 'me')
            .map(function (r) { return r.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.json().errors || 'Server error'); });
    };
    UserService.prototype.getHealth = function () {
        return this.http
            .get(this.baseUrl + 'health')
            .map(function (r) { return r.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.json().errors || 'Server error'); });
    };
    UserService.prototype.register = function (user) {
        return this.http
            .post(this.baseUrl + 'usuario', user)
            .map(function (r) { return r.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.json().errors || 'Server error'); });
    };
    UserService.prototype.getAll = function () {
        return this.http
            .get(this.baseUrl + 'usuario')
            .map(function (r) { return r.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.json().errors || 'Server error'); });
    };
    UserService.prototype.getMeAll = function (me) {
        return this.http
            .get(this.baseUrl + 'usuario')
            .map(function (r) { return [r.json(), me]; })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.json().errors || 'Server error'); });
    };
    UserService.prototype.delete = function (id) {
        return this.http
            .delete(this.baseUrl + 'users/' + id)
            .map(function (r) { return r.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.json().errors || 'Server error'); });
    };
    UserService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_6__authentication_service__["a" /* AuthenticationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_6__authentication_service__["a" /* AuthenticationService */]) === 'function' && _b) || Object])
    ], UserService);
    return UserService;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/andarilhoz/campus/hackathon-front/src/user.service.js.map

/***/ }),

/***/ 171:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthenticationService = (function () {
    function AuthenticationService(http) {
        this.http = http;
        this.mainUrl = window.location.origin;
        this.baseUrl = this.mainUrl /*.substring(0,this.mainUrl.lastIndexOf(':')) + ':8000*/ + '/api/';
        this.emittLogin = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* EventEmitter */]();
    }
    AuthenticationService.prototype.login = function (username, password) {
        var _this = this;
        return this.http.post(this.baseUrl + 'login', { username: username, password: password })
            .map(function (response) {
            //if logged will return 200 ok
            _this.emittLogin.emit(true);
        })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error.json().errors || 'Server error'); });
    };
    AuthenticationService.prototype.logout = function () {
        var _this = this;
        return this.http.get(this.baseUrl + 'logout')
            .map(function (response) {
            //if logged will return 200 ok
            _this.emittLogin.emit(false);
        })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error.json().errors || 'Server error'); });
    };
    AuthenticationService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _a) || Object])
    ], AuthenticationService);
    return AuthenticationService;
    var _a;
}());
//# sourceMappingURL=C:/Users/andarilhoz/campus/hackathon-front/src/authentication.service.js.map

/***/ }),

/***/ 363:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'app-about',
            template: __webpack_require__(741),
            styles: [__webpack_require__(726)]
        }), 
        __metadata('design:paramtypes', [])
    ], AboutComponent);
    return AboutComponent;
}());
//# sourceMappingURL=C:/Users/andarilhoz/campus/hackathon-front/src/about.component.js.map

/***/ }),

/***/ 364:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_user_service__ = __webpack_require__(121);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DashboardComponent = (function () {
    function DashboardComponent(userService) {
        this.userService = userService;
        this.myData = {
            pos: 1,
            userScore: 0,
            lastMonth: 0,
            media: 0
        };
        this.topUsers = [];
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.getUserData();
    };
    DashboardComponent.prototype.getUserData = function () {
        var _this = this;
        this.user = this.userService.getMe().subscribe(function (dataMe) {
            _this.user = dataMe;
            _this.userService.getMeAll(_this.user).subscribe(function (data) {
                _this.topUsers = data[0];
                _this.topUsers.forEach(function (user) {
                    user.userScore = 0;
                    user.contas.forEach(function (conta, index) {
                        user.userScore += _this.calculateLastTwoScore(user, index);
                    });
                });
                _this.topUsers.sort(function (user1, user2) { return user1.userScore < user2.userScore ? 1 : -1; });
                _this.myData = data[0].filter(function (user) { return user.username == data[1].username; })[0];
                _this.myData.pos = _this.topUsers.indexOf(_this.myData) + 1;
                _this.myData.lastMonth = _this.lastMonthEconomy(_this.myData);
                var total = 0;
                var media = _this.myData.contas.forEach(function (conta) {
                    total += _this.parseValorIntoInt(conta.valor);
                });
                _this.myData.media = total / _this.myData.contas.length;
            }, function (error) {
                console.log(error);
            });
        }, function (error) {
            console.log(error);
        });
    };
    DashboardComponent.prototype.parseValorIntoInt = function (valor) {
        return Number(valor.replace(',', '.'));
    };
    DashboardComponent.prototype.lastMonthEconomy = function (user) {
        var userCount = 0;
        var contaNova = this.parseValorIntoInt(user.contas[0].valor);
        var contaAntiga = this.parseValorIntoInt(user.contas[1].valor);
        var porcentagem = 0;
        if (contaNova > contaAntiga) {
            //fudeu
            porcentagem += contaAntiga / contaNova * 100;
        }
        else {
            //suave
            porcentagem -= contaNova / contaAntiga * 100;
        }
        return Math.trunc(porcentagem);
    };
    DashboardComponent.prototype.calculateLastTwoScore = function (user, index) {
        var userCount = 0;
        if (index != 0 && index != user.contas.length) {
            var contaNova = this.parseValorIntoInt(user.contas[index - 1].valor);
            var contaAntiga = this.parseValorIntoInt(user.contas[index].valor);
            var porcentagem = 0;
            if (contaNova > contaAntiga) {
                //fudeu
                porcentagem = contaAntiga / contaNova * 100;
                userCount -= porcentagem * 100;
            }
            else {
                //suave
                porcentagem = contaNova / contaAntiga * 100;
                userCount += porcentagem * 1000;
            }
        }
        return Math.trunc(userCount);
    };
    DashboardComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'app-dashboard',
            template: __webpack_require__(745),
            styles: [__webpack_require__(730)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_user_service__["a" /* UserService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__shared_user_service__["a" /* UserService */]) === 'function' && _a) || Object])
    ], DashboardComponent);
    return DashboardComponent;
    var _a;
}());
//# sourceMappingURL=C:/Users/andarilhoz/campus/hackathon-front/src/dashboard.component.js.map

/***/ }),

/***/ 365:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlobalComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GlobalComponent = (function () {
    function GlobalComponent() {
    }
    GlobalComponent.prototype.ngOnInit = function () {
    };
    GlobalComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'app-global',
            template: __webpack_require__(748),
            styles: [__webpack_require__(733)]
        }), 
        __metadata('design:paramtypes', [])
    ], GlobalComponent);
    return GlobalComponent;
}());
//# sourceMappingURL=C:/Users/andarilhoz/campus/hackathon-front/src/global.component.js.map

/***/ }),

/***/ 366:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
        $('.carousel.carousel-slider').carousel({ fullWidth: true });
        $('.parallax').parallax();
    };
    HomeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__(749),
            styles: [__webpack_require__(734)]
        }), 
        __metadata('design:paramtypes', [])
    ], HomeComponent);
    return HomeComponent;
}());
//# sourceMappingURL=C:/Users/andarilhoz/campus/hackathon-front/src/home.component.js.map

/***/ }),

/***/ 367:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_authentication_service__ = __webpack_require__(171);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = (function () {
    function LoginComponent(router, authenticationService) {
        this.router = router;
        this.authenticationService = authenticationService;
        this.model = {};
        this.loading = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.authenticationService.logout().subscribe(function (data) {
        }, function (error) {
            console.log(error);
        });
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.loading = true;
        this.authenticationService.login(this.model.username, this.model.password)
            .subscribe(function (data) {
            console.log(data);
            _this.router.navigate(['/home']);
        }, function (error) {
            console.log(error);
            Materialize.toast('User or password doesnt match', 4000, 'red rounded');
            _this.loading = false;
        });
    };
    LoginComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__(750),
            styles: [__webpack_require__(735)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_authentication_service__["a" /* AuthenticationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__shared_authentication_service__["a" /* AuthenticationService */]) === 'function' && _b) || Object])
    ], LoginComponent);
    return LoginComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/andarilhoz/campus/hackathon-front/src/login.component.js.map

/***/ }),

/***/ 368:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_user_service__ = __webpack_require__(121);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RegisterComponent = (function () {
    function RegisterComponent(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.user = {
            username: '',
            email: '',
            password: '',
            confirmEmail: '',
            cpf: '',
            inscricao: '',
            _id: '',
            spended: '',
            percent: '',
            userScore: 0,
            userCount: 0,
            contas: []
        };
    };
    RegisterComponent.prototype.save = function (model, isValid) {
        var _this = this;
        if (isValid) {
            this.userService.register(model).subscribe(function (userId) {
                Materialize.toast("Usuario criado com sucesso ", 4000, 'blue rounded');
                _this.router.navigate(['/']);
            }, function (err) {
                err.forEach(function (error) {
                    Materialize.toast((error.length > 1 ? error : error.message), 4000, 'red rounded');
                });
            });
        }
    };
    RegisterComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'app-register',
            template: __webpack_require__(754),
            styles: [__webpack_require__(739)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__shared_user_service__["a" /* UserService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__shared_user_service__["a" /* UserService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], RegisterComponent);
    return RegisterComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/andarilhoz/campus/hackathon-front/src/register.component.js.map

/***/ }),

/***/ 369:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_user_service__ = __webpack_require__(121);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopFiveUsersComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TopFiveUsersComponent = (function () {
    function TopFiveUsersComponent(userService) {
        this.userService = userService;
        this.topUsers = [];
    }
    TopFiveUsersComponent.prototype.parseValorIntoInt = function (valor) {
        return Number(valor.replace(',', '.'));
    };
    TopFiveUsersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getAll().subscribe(function (data) {
            _this.topUsers = data;
            _this.topUsers.forEach(function (user) {
                user.userScore = 0;
                user.contas.forEach(function (conta, index) {
                    user.userScore += _this.calculateLastTwoScore(user, index);
                });
            });
            _this.topUsers.sort(function (user1, user2) { return user1.userScore < user2.userScore ? 1 : -1; });
        }, function (error) {
            console.log(error);
        });
    };
    TopFiveUsersComponent.prototype.calculateLastTwoScore = function (user, index) {
        var userCount = 0;
        if (index != 0 && index != user.contas.length) {
            var contaNova = this.parseValorIntoInt(user.contas[index - 1].valor);
            var contaAntiga = this.parseValorIntoInt(user.contas[index].valor);
            var porcentagem = 0;
            if (contaNova > contaAntiga) {
                //fudeu
                porcentagem = contaAntiga / contaNova * 100;
                userCount -= porcentagem * 100;
            }
            else {
                //suave
                porcentagem = contaNova / contaAntiga * 100;
                userCount += porcentagem * 1000;
            }
        }
        return Math.trunc(userCount);
    };
    TopFiveUsersComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'app-top-five-users',
            template: __webpack_require__(755),
            styles: [__webpack_require__(740)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_user_service__["a" /* UserService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__shared_user_service__["a" /* UserService */]) === 'function' && _a) || Object])
    ], TopFiveUsersComponent);
    return TopFiveUsersComponent;
    var _a;
}());
//# sourceMappingURL=C:/Users/andarilhoz/campus/hackathon-front/src/top-five-users.component.js.map

/***/ }),

/***/ 442:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 442;


/***/ }),

/***/ 443:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(571);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(531);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(570);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_module__ = __webpack_require__(561);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=C:/Users/andarilhoz/campus/hackathon-front/src/main.js.map

/***/ }),

/***/ 560:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(742),
            styles: [__webpack_require__(727)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=C:/Users/andarilhoz/campus/hackathon-front/src/app.component.js.map

/***/ }),

/***/ 561:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(522);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_authentication_service__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_user_service__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_routing__ = __webpack_require__(562);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(560);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__top_five_users_top_five_users_component__ = __webpack_require__(369);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__navbar_navbar_component__ = __webpack_require__(568);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__home_home_component__ = __webpack_require__(366);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__login_login_component__ = __webpack_require__(367);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__register_register_component__ = __webpack_require__(368);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__footer_footer_component__ = __webpack_require__(565);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__about_about_component__ = __webpack_require__(363);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__profile_profile_component__ = __webpack_require__(569);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__dashboard_dashboard_component__ = __webpack_require__(364);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__forgot_password_forgot_password_component__ = __webpack_require__(566);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__carousel_carousel_component__ = __webpack_require__(564);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__global_global_component__ = __webpack_require__(365);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__assunto_assunto_component__ = __webpack_require__(563);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__logo_space_logo_space_component__ = __webpack_require__(567);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_8__top_five_users_top_five_users_component__["a" /* TopFiveUsersComponent */],
                __WEBPACK_IMPORTED_MODULE_9__navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_6__app_routing__["a" /* routingComponents */],
                __WEBPACK_IMPORTED_MODULE_10__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_11__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_12__register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_13__footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_14__about_about_component__["a" /* AboutComponent */],
                __WEBPACK_IMPORTED_MODULE_15__profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_16__dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_17__forgot_password_forgot_password_component__["a" /* ForgotPasswordComponent */],
                __WEBPACK_IMPORTED_MODULE_18__carousel_carousel_component__["a" /* CarouselComponent */],
                __WEBPACK_IMPORTED_MODULE_19__global_global_component__["a" /* GlobalComponent */],
                __WEBPACK_IMPORTED_MODULE_20__assunto_assunto_component__["a" /* AssuntoComponent */],
                __WEBPACK_IMPORTED_MODULE_21__logo_space_logo_space_component__["a" /* LogoSpaceComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_6__app_routing__["b" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */] /*,
                MaterializeModule*/
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__shared_authentication_service__["a" /* AuthenticationService */],
                __WEBPACK_IMPORTED_MODULE_5__shared_user_service__["a" /* UserService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=C:/Users/andarilhoz/campus/hackathon-front/src/app.module.js.map

/***/ }),

/***/ 562:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__top_five_users_top_five_users_component__ = __webpack_require__(369);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home_component__ = __webpack_require__(366);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login_component__ = __webpack_require__(367);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__register_register_component__ = __webpack_require__(368);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__dashboard_dashboard_component__ = __webpack_require__(364);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__about_about_component__ = __webpack_require__(363);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__global_global_component__ = __webpack_require__(365);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return AppRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routingComponents; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_3__home_home_component__["a" /* HomeComponent */] },
    { path: 'home', pathMatch: 'full', redirectTo: '/' },
    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_7__about_about_component__["a" /* AboutComponent */] },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_6__dashboard_dashboard_component__["a" /* DashboardComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_4__login_login_component__["a" /* LoginComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_5__register_register_component__["a" /* RegisterComponent */] },
    { path: 'global', component: __WEBPACK_IMPORTED_MODULE_8__global_global_component__["a" /* GlobalComponent */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppRoutingModule);
    return AppRoutingModule;
}());
var routingComponents = [__WEBPACK_IMPORTED_MODULE_2__top_five_users_top_five_users_component__["a" /* TopFiveUsersComponent */]];
//# sourceMappingURL=C:/Users/andarilhoz/campus/hackathon-front/src/app.routing.js.map

/***/ }),

/***/ 563:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(118);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AssuntoComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AssuntoComponent = (function () {
    function AssuntoComponent(router) {
        this.router = router;
        this.dicas = [
            "Troque as lâmpadas incandescentes por fluorescentes. Estas duram mais e utilizam menor quantidade de energia", "Não deixe a luz acesa em cômodos desnecessariamente", "Pinte as paredes internas e os tetos da casa com cores claras. Elas refletem eespalham a luz para todo o ambiente", "Aproveite ao máximo a luz do dia deixando cortinas e portas abertas. Em casode mesas de trabalho e de leitura, coloque-as próximas às janelas", "Deixe os globos e lustres transparentes sempre limpos para aproveitar aomáximo a potência das lâmpadas", "No caso dos aparelhos de ar-condicionado, mantenha os filtros sempre bemhigienizados", "Use o termostato do ar-condicionado para regular a temperatura e evitar asobrecarga do aparelhoMáquina de lavar roupa e ferro de passar consomem bastante energia. Portanto,tente usá-los quando houver bastante roupa acumulada para realizar o trabalhode uma única vez", "Em dias secos, ao invés de usar umidificadores eletrônicos, coloque um panoúmido pendurado no recinto e uma bacia com água", "Evite deixar aparelhos eletrônicos em stand-by. Apesar de desligados, essemodo pode representar um gasto mensal de até 12%", "Evite colocar o fogão e a geladeira próximos um do outro. Eles podem interferirno consumo de energia", "Mantenha a borracha de vedação da geladeira sempre em bom estado", "Regule a temperatura da geladeira no inverno, ajustando o termostato para evitardesperdício de consumo, e não forre as prateleiras para não exigir esforçoredobrado do eletrodoméstico", "Quando viajar, desligue a chave geral da casa para não gastar energia com coisasdesnecessárias."];
        this.dicaAtual = this.dicas[Math.floor(Math.random() * this.dicas.length)];
    }
    AssuntoComponent.prototype.ngOnInit = function () {
    };
    AssuntoComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'app-assunto',
            template: __webpack_require__(743),
            styles: [__webpack_require__(728)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _a) || Object])
    ], AssuntoComponent);
    return AssuntoComponent;
    var _a;
}());
//# sourceMappingURL=C:/Users/andarilhoz/campus/hackathon-front/src/assunto.component.js.map

/***/ }),

/***/ 564:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarouselComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CarouselComponent = (function () {
    function CarouselComponent() {
    }
    CarouselComponent.prototype.ngOnInit = function () {
    };
    CarouselComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'app-carousel',
            template: __webpack_require__(744),
            styles: [__webpack_require__(729)]
        }), 
        __metadata('design:paramtypes', [])
    ], CarouselComponent);
    return CarouselComponent;
}());
//# sourceMappingURL=C:/Users/andarilhoz/campus/hackathon-front/src/carousel.component.js.map

/***/ }),

/***/ 565:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'app-footer',
            template: __webpack_require__(746),
            styles: [__webpack_require__(731)]
        }), 
        __metadata('design:paramtypes', [])
    ], FooterComponent);
    return FooterComponent;
}());
//# sourceMappingURL=C:/Users/andarilhoz/campus/hackathon-front/src/footer.component.js.map

/***/ }),

/***/ 566:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotPasswordComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ForgotPasswordComponent = (function () {
    function ForgotPasswordComponent() {
    }
    ForgotPasswordComponent.prototype.ngOnInit = function () {
    };
    ForgotPasswordComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'app-forgot-password',
            template: __webpack_require__(747),
            styles: [__webpack_require__(732)]
        }), 
        __metadata('design:paramtypes', [])
    ], ForgotPasswordComponent);
    return ForgotPasswordComponent;
}());
//# sourceMappingURL=C:/Users/andarilhoz/campus/hackathon-front/src/forgot-password.component.js.map

/***/ }),

/***/ 567:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogoSpaceComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LogoSpaceComponent = (function () {
    function LogoSpaceComponent() {
    }
    LogoSpaceComponent.prototype.ngOnInit = function () {
    };
    LogoSpaceComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'app-logo-space',
            template: __webpack_require__(751),
            styles: [__webpack_require__(736)]
        }), 
        __metadata('design:paramtypes', [])
    ], LogoSpaceComponent);
    return LogoSpaceComponent;
}());
//# sourceMappingURL=C:/Users/andarilhoz/campus/hackathon-front/src/logo-space.component.js.map

/***/ }),

/***/ 568:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_user_service__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_authentication_service__ = __webpack_require__(171);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavbarComponent = (function () {
    function NavbarComponent(router, userService, authenticationService) {
        this.router = router;
        this.userService = userService;
        this.authenticationService = authenticationService;
        this.user = {};
        this.logged = false;
        this.avatar = '';
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        var nav = $('.nav-container');
        $(window).scroll(function () {
            if ($(this).scrollTop() > 300) {
                nav.addClass("f-nav");
            }
            else {
                nav.removeClass("f-nav");
            }
        });
        if (this.router.url != '/login' && this.router.url != '/register') {
            this.getUserData();
        }
        this.authenticationService.emittLogin.subscribe(function (loggin) {
            _this.logged = loggin;
            if (loggin) {
                _this.getUserData();
            }
        });
    };
    NavbarComponent.prototype.getUserData = function () {
        var _this = this;
        this.user = this.userService.getMe().subscribe(function (data) {
            _this.logged = true;
            _this.user = data;
            _this.userService.getAvatar(data._id)
                .subscribe(function (data) {
                _this.avatar = data;
            }, function (error) {
                console.log(error);
            });
        }, function (error) {
            _this.logged = false;
        });
    };
    NavbarComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'app-navbar',
            template: __webpack_require__(752),
            styles: [__webpack_require__(737)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_user_service__["a" /* UserService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__shared_user_service__["a" /* UserService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__shared_authentication_service__["a" /* AuthenticationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__shared_authentication_service__["a" /* AuthenticationService */]) === 'function' && _c) || Object])
    ], NavbarComponent);
    return NavbarComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=C:/Users/andarilhoz/campus/hackathon-front/src/navbar.component.js.map

/***/ }),

/***/ 569:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProfileComponent = (function () {
    function ProfileComponent() {
    }
    ProfileComponent.prototype.ngOnInit = function () {
    };
    ProfileComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'app-profile',
            template: __webpack_require__(753),
            styles: [__webpack_require__(738)]
        }), 
        __metadata('design:paramtypes', [])
    ], ProfileComponent);
    return ProfileComponent;
}());
//# sourceMappingURL=C:/Users/andarilhoz/campus/hackathon-front/src/profile.component.js.map

/***/ }),

/***/ 570:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=C:/Users/andarilhoz/campus/hackathon-front/src/environment.js.map

/***/ }),

/***/ 571:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__(585);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__(578);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__(574);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__(580);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__(579);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__(577);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__(576);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__(584);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__(573);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__(572);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__(582);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__(575);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__(583);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__(581);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__(586);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__(1034);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
















//# sourceMappingURL=C:/Users/andarilhoz/campus/hackathon-front/src/polyfills.js.map

/***/ }),

/***/ 726:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 727:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 728:
/***/ (function(module, exports) {

module.exports = ".page-header{\r\n    height: auto;\r\n    padding: 40px 0 20px;\r\n}"

/***/ }),

/***/ 729:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 730:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 731:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 732:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 733:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 734:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 735:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 736:
/***/ (function(module, exports) {

module.exports = ".p-b50 {\r\n    padding-bottom: 50px;\r\n}\r\n\r\n.logo {\r\n    height: 200px;\r\n}\r\n\r\n.p-t50 {\r\n    padding-top: 50px;\r\n}"

/***/ }),

/***/ 737:
/***/ (function(module, exports) {

module.exports = ".brand-logo img{\r\n    height: 100px;\r\n    width: 120px;\r\n    margin-left: 2em;\r\n}\r\n\r\n\r\n\r\nnav {\r\n    height: 100px;\r\n    line-height: 100px;\r\n}\r\n\r\nnav i, nav [class^=\"mdi-\"], nav [class*=\"mdi-\"], nav i.material-icons {\r\n    height: 100px;\r\n    line-height: 100px;\r\n}\r\n\r\nnav .button-collapse i {\r\n    height: 100px;\r\n    line-height: 100px;\r\n}\r\n\r\nnav .brand-logo { \r\n    font-size: 1.6rem; \r\n}\r\n\r\n@media only screen and (min-width: 601px){\r\n    nav, nav .nav-wrapper i, nav a.button-collapse, nav a.button-collapse i {\r\n        height: 100px;\r\n        line-height: 100px;\r\n            margin-top: -20px;\r\n    }\r\n}\r\n.f-nav{ z-index: 9999; position: fixed; left: 0; top: 0; width: 100%;} /* this make our menu fixed top */\r\n"

/***/ }),

/***/ 738:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 739:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 740:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 741:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <p>\n  Criada durante a BigHackathon na 10ª Campus Party/SP, por estudantes com foco em encontrar soluções para o 7º objetivo de desenvolvimento sustentável (Energia Limpa e acessível).\n  O Save vem com a proposta de gameficar a economia de energia, incentivando a pessoa a economizar e receber prêmios/descontos com a alta pontuação.\n  Com uma interface amigável e dicas de fácil compreensão, buscamos trazer informações úteis ao usuário que trazem reais benefícios em favor da economia da energia doméstica.\n  </p>\n</div>\n"

/***/ }),

/***/ 742:
/***/ (function(module, exports) {

module.exports = "<app-logo-space></app-logo-space>\n<app-navbar></app-navbar>\n\n<app-assunto></app-assunto>\n<router-outlet></router-outlet>\n\n\n<app-footer></app-footer>"

/***/ }),

/***/ 743:
/***/ (function(module, exports) {

module.exports = "<section *ngIf=\"router.url == '/' || router.url == '/home'  \" class=\"page page-header blue\">\n  <div class=\"container center-align\">\n    <h2 class=\"white-text\">{{dicaAtual}}\n      <span class=\"heading-divider\"></span>\n    </h2>\n    <div class=\"row\">\n      <!--<span class=\"white-text\">{{ router.url}}</span>-->\n    </div>\n  </div>\n</section>"

/***/ }),

/***/ 744:
/***/ (function(module, exports) {

module.exports = "\n <div class=\"carousel carousel-slider center\" data-indicators=\"true\">\n    <a class=\"carousel-item\" href=\"#one!\">  <img src=\"./assets/monitorar-energia.jpg\"></a>\n    <a class=\"carousel-item\" href=\"#two!\">  <img src=\"./assets/segurar-Energia.jpg\"></a>\n    <a class=\"carousel-item\" href=\"#three!\"><img src=\"./assets/banner-energy-saving.png\"></a>\n    <a class=\"carousel-item\" href=\"#four!\"> <img src=\"./assets/celular.jpg\"></a>\n  </div>"

/***/ }),

/***/ 745:
/***/ (function(module, exports) {

module.exports = "<h3 class=\"right-align\">Meu Dashboard</h3>\n\n<hr>\n<br>\n<div class=\"row\">\n  <div class=\"col s6\">\n    <b>Nome: </b><span>{{user.username}}</span><br><br>\n    <b>Nº de Instalação: </b><span>{{user.inscricao}}</span>\n  </div>\n  <div class=\"col s6\">\n    <b>Posição no Ranking:</b> <span>{{myData.pos}}º</span> \n  </div>\n</div>\n\n\n<div class=\"row\">\n  <div class=\"col s4 offset-s4\">\n  <div class=\"card red accent-1 \">\n    <div class=\"card-content center-align \">\n        <b>SAVES</b><br>\n    <b>(Pontuação Acumulada)</b>\n    </div>\n    <div class=\"card-content white  center-align\">\n      <p>{{myData.userScore}}</p>\n    </div>\n  </div>\n  </div>\n</div>\n\n\n<div class=\"row\">\n    <div class=\"col s4  offset-s1\">\n  <div class=\"card green lighten-1 \">\n    <div class=\"card-content center-align \">\n        <b>ECONOMIA</b><br>\n    <b>(Percentual de Economia do último mês)</b>\n    </div>\n    <div class=\"card-content white  center-align\">\n      <p>{{myData.lastMonth}}%</p>\n    </div>\n  </div>\n  </div>\n\n  <div class=\"col s4 offset-s1 \">\n  <div class=\"card  cyan accent-3 \">\n    <div class=\"card-content center-align \">\n        <b>MÉDIA</b><br>\n    <b>(Média anual dos gastos)</b>\n    </div>\n    <div class=\"card-content white  center-align\">\n      <p>{{myData.media | currency:'BRL':true}}</p>\n    </div>\n  </div>\n  </div>\n\n\n</div>\n\n\n\n"

/***/ }),

/***/ 746:
/***/ (function(module, exports) {

module.exports = "<footer class=\"page-footer yellow darken-4\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col l6 s12\">\n          <h5 class=\"white-text\">Footer Content</h5>\n          <p class=\"grey-text text-lighten-4\">You can use rows and columns here to organize your footer content.</p>\n        </div>\n        <div class=\"col l4 offset-l2 s12\">\n          <h5 class=\"white-text\">Links</h5>\n          <ul>\n            <li><a class=\"grey-text text-lighten-3\" href=\"#!\">Link 1</a></li>\n            <li><a class=\"grey-text text-lighten-3\" href=\"#!\">Link 2</a></li>\n            <li><a class=\"grey-text text-lighten-3\" href=\"#!\">Link 3</a></li>\n            <li><a class=\"grey-text text-lighten-3\" href=\"#!\">Link 4</a></li>\n          </ul>\n        </div>\n      </div>\n    </div>\n    <div class=\"footer-copyright\">\n      <div class=\"container\">\n      © 2017 Copyright Text\n      <a class=\"grey-text text-lighten-4 right\" href=\"#!\">More Links</a>\n      </div>\n    </div>\n  </footer>"

/***/ }),

/***/ 747:
/***/ (function(module, exports) {

module.exports = "<p>\n  forgot-password works!\n</p>\n"

/***/ }),

/***/ 748:
/***/ (function(module, exports) {

module.exports = "<app-top-five-users></app-top-five-users>"

/***/ }),

/***/ 749:
/***/ (function(module, exports) {

module.exports = "<app-carousel></app-carousel>\n  <div class=\"section yellow\">\n    <div class=\"row container\">\n      <h2 class=\"header\">Como Funciona</h2>\n      <p class=\"grey-text text-darken-3 lighten-3\">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>\n    </div>\n  </div>\n  <div class=\"parallax-container\">\n    <div class=\"parallax\"><img src=\"./assets/graado-heolico.jpg\"></div>\n  </div>\n<div class=\"section white\">\n<div class=\"row container\">\n    <h2 class=\"header\">Top 5</h2>\n   <app-top-five-users></app-top-five-users>\n</div>\n</div>\n"

/***/ }),

/***/ 750:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n<div class=\"block login col s10\">\n  <form name=\"form\" (ngSubmit)=\"f.form.valid && login()\" #f=\"ngForm\" novalidate class=\"col s12\">\n    <h1>\n      Login\n    </h1>\n\n    <div class=\"login-form\">\n      <div class=\"input-field\" >\n        <label for=\"login-name\">Username</label>\n        <input type=\"text\" value=\"\" [(ngModel)]=\"model.username\" #username=\"ngModel\" required  name=\"username\" id=\"login-name\">\n      </div>\n\n      <div class=\"input-field\">\n        <label for=\"login-pass\">password</label>\n        <input type=\"password\" class=\"login-field\" [(ngModel)]=\"model.password\" #password=\"ngModel\" required value=\"\" name=\"password\" id=\"login-pass\">\n      </div>\n\n      <img *ngIf=\"loading\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\" />\n\n      <input type=\"submit\" [disabled]=\"loading\"  class=\"btn btn-primary btn-large btn-block\" >\n    </div>\n  </form>\n</div>\n</div>"

/***/ }),

/***/ 751:
/***/ (function(module, exports) {

module.exports = "<div class=\"p-t50\" style=\"background-image:url(./assets/headerimage.jpg); background-attachment:fixed; background-position:top;\">\n\t\t<div class=\"container\">\n\t\t\t<div class=\"row\"> \t\n\t\t\t\t<div class=\"col-md-12 center-align\">\n\t\t\t\t\t<div class=\"p-b50 text-center\"><img class=\"logo\" src=\"./assets/light-bulb.png\"></div>\n\t\t\t\t\t<div></div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>"

/***/ }),

/***/ 752:
/***/ (function(module, exports) {

module.exports = "<nav class=\"nav-container\">\n  <div class=\"nav-wrapper  grey lighten-1 \">\n    <a routerLink=\"/home\" class=\"brand-logo\"><img src=\"./assets/light-bulb.png\" alt=\"\"></a>\n        <ul class=\"right hide-on-med-and-down\">\n          <li><a routerLink=\"/about\">Sobre</a></li>\n          <li><a routerLink=\"/global\">Dashboard Global</a></li>\n          <li *ngIf=\"!logged && router.url != '/login'\"><a routerLink=\"/login\">Entrar</a></li>\n          <li *ngIf=\"logged\"><a routerLink=\"/login\">Sair</a></li>\n          <li *ngIf=\"!logged && router.url == '/login'\"><a routerLink=\"/register\">Registrar</a></li>\n          <li *ngIf=\"logged\">\n              <a routerLink=\"/dashboard\" class=\"badge\">\n                  {{ user.username  | uppercase}}\n              </a>\n          </li>\n        </ul>\n  </div>\n</nav>\n\n"

/***/ }),

/***/ 753:
/***/ (function(module, exports) {

module.exports = "<p>\n  profile works!\n</p>\n"

/***/ }),

/***/ 754:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col s5 card\">\n    <form #f=\"ngForm\" novalidate>\n\n      <div class=\"input-field col s12\">\n        <input type=\"text\" class=\"validate\" name=\"username\" [ngModel]=\"user.name\" \n          required minlength=\"5\" maxlength=\"10\" #username=\"ngModel\"\n          [class.invalid]=\"!username.valid && !(username.pristine && !f.submitted)\">\n        <label data-error=\"Username required (min 5 characters). \" for=\"username\">Username</label>\n      </div>  \n\n      <div class=\"input-field col s12\">\n        <input type=\"email\" class=\"validate\" name=\"email\" [ngModel]=\"user.email\"\n          required validateEqual=\"confirmEmail\" reverse=\"true\" #email=\"ngModel\" \n          [class.invalid]=\"!email.valid && !(email.pristine && !f.submitted)\">\n        <label for=\"email\" data-error=\"Email is required john@doe.com\">Email</label>\n      </div>\n\n      <div class=\"input-field col s12\">\n        <input type=\"text\" name=\"confirmEmail\" [ngModel]=\"user.confirmEmail\"\n          required validateEqual=\"email\" reverse=\"false\" #confirmEmail=\"ngModel\"  \n          [class.invalid]=\"!confirmEmail.valid && !(confirmEmail.pristine && !f.submitted)\">\n        <label for=\"confirmEmail\" data-error=\"Email mismatch\" >Confirm Email</label>\n      </div>\n\n      <pre>{{ confirmEmail.valid }}</pre>\n\n      <div class=\"input-field col s12\">\n        <input type=\"password\" class=\"va\n        0lidate\" name=\"password\" [ngModel]=\"user.password\"\n          required validateEqual=\"confirmPassword\" reverse=\"true\"  #password=\"ngModel\"\n          [class.invalid]=\"!password.valid && !(password.pristine && !f.submitted)\">\n        <label for=\"password\" data-error=\"Password id required\" >Password</label>\n      </div>  \n      \n      <div class=\"input-field col s12\">\n        <input id=\"confirmPassword\" type=\"password\" name=\"confirmPassword\" [ngModel]=\"user.confirmPassword\"\n          required validateEqual=\"password\" reverse=\"false\" #confirmPassword=\"ngModel\" \n          [class.invalid]=\"!confirmPassword.valid && !(confirmPassword.pristine && !f.submitted)\">\n        <label for=\"confirmPassword\" data-error=\"Password mismatch\">Confirm Password</label>\n      </div>\n\n      <div class=\"input-field col s12\">\n        <input id=\"cpf\" type=\"text\" name=\"cpf\" [ngModel]=\"user.cpf\"\n          required #cpf=\"ngModel\" \n          [class.invalid]=\"cpf.valid && !(cpf.pristine && !f.submitted)\">\n        <label for=\"cpf\" data-error=\"CPF não confere\">CPF</label>\n      </div>\n\n      <div class=\"input-field col s12\">\n        <input id=\"inscricao\" type=\"text\" name=\"inscricao\" [ngModel]=\"user.inscricao\"\n          required #inscricao=\"ngModel\" \n          [class.invalid]=\"inscricao.valid && !(inscricao.pristine && !f.submitted)\">\n        <label for=\"inscricao\" data-error=\"inscricao não confere\">inscricao</label>\n      </div>\n\n      <button class=\"btn waves-effect waves-light\" (click)=\"save(f.value,f.valid)\" >Submit\n        </button>\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ 755:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col s10 offset-s1\">\n    <table>\n            <thead>\n              <tr>\n                  <th data-field=\"name\">Nome</th>\n                  <th data-field=\"spended\">Score</th>\n              </tr>\n            </thead>\n\n            <tbody>\n              <tr *ngFor=\"let user of topUsers\">\n                <td>{{user.username | uppercase}}</td>\n                <td>{{user.userScore}}</td>\n              </tr>\n            </tbody>\n    </table>\n  </div>\n</div>"

/***/ })

},[1036]);
//# sourceMappingURL=main.bundle.map
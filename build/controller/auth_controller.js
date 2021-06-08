"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var auth_1 = __importDefault(require("../modules/auth"));
var auth = new auth_1.default();
var AuthController = /** @class */ (function () {
    function AuthController() {
    }
    AuthController.login = function (req, res) {
        var _a = req.body, email = _a.email, pwd = _a.pwd;
        var result = auth.login(email, pwd);
        res.send({ message: result });
    };
    AuthController.register = function (request, response) {
        var _a = request.body, email = _a.email, password = _a.password, name = _a.name;
        var newUser = auth.register(name, email, password);
        response.send({ message: "Account successfully created", data: newUser });
    };
    AuthController.list_of_users = function (req, res) {
        var list = auth.listOfUser();
        res.send(list);
    };
    return AuthController;
}());
exports.default = AuthController;

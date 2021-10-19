"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
var express_1 = __importDefault(require("express"));
var helmet_1 = __importDefault(require("helmet"));
var dotenv_1 = __importDefault(require("dotenv"));
var router_1 = require("./routes/router");
var httplogger_1 = require("./logger/httplogger");
dotenv_1.default.config();
var app = (0, express_1.default)();
exports.app = app;
app.use((0, helmet_1.default)());
app.use(httplogger_1.httpLogger);
app.use("/teams", router_1.teamRoute);
app.use("*", function (req, res) {
    res.status(404).send("content not found");
});

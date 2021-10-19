"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.teamRoute = void 0;
var express_1 = __importDefault(require("express"));
var teams_1 = require("../controller/teams");
var teamRoute = express_1.default.Router();
exports.teamRoute = teamRoute;
teamRoute.get("/", teams_1.getTeams);
teamRoute.get("/:id", teams_1.getParticularTeams);

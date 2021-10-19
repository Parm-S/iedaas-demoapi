import express from "express";
import { getParticularTeams, getTeams } from "../controller/teams";

const teamRoute = express.Router();

teamRoute.get("/", getTeams);
teamRoute.get("/:id", getParticularTeams);

export { teamRoute };

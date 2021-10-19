import { Request, Response } from "express";
import { teams, getTeamName } from "../repository/data";

const getTeams = async (req: Request, res: Response) => {
   try {
    const data = await teams;
    if (data) {
      return res.status(200).send(data);
    }
  } catch (e) {
    res.status(500).send("Server Error");
  }
};

const getParticularTeams = async (req: Request, res: Response) => {
  const id = req.params.id;
   try {
    const teamsData = await getTeamName(id);
    if (teamsData) {
      return res.status(200).send(teamsData);
    } else {
      res.status(404).send("content not found");
    }
  } catch (e) {
    res.status(500).send("Server Error");
  }
};
export { getParticularTeams, getTeams };

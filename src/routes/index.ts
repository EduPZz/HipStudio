import { Router, Response, Request } from "express";
import * as ClientController from "../controllers/clientController";

export const router = Router();

router.post("/clients", ClientController.store);
router.get("/clients", ClientController.index);

import { Router, Response, Request } from "express";
import * as ClientController from "../controllers/ClientController";

export const router = Router();

router.post("/clients", ClientController.store);
router.get("/clients", ClientController.index);
router.get("/client/:clientId", ClientController.show);
router.put("/clients/:clientId", ClientController.update);
router.delete("/clients/:clientId", ClientController.remove);

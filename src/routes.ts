import { Router } from "express";
import { BoletoController } from "./controller/BoletoController";

const routes = Router();
const boletoController = new BoletoController();

routes.get("/boleto/:line", boletoController.boleto);

export { routes };

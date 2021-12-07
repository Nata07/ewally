import { Request, Response } from "express";
import { BoletoService } from "../services/BoletoService";

class BoletoController {
  async boleto(request: Request, response: Response) {
    const line = request.params.line;
    const service = new BoletoService();

    if (line.length < 44) {
      return response
        .status(400)
        .json({ error: "invalid code. Barcode less than 44 characters" });
    }

    if (!/^\d+$/.test(line)) {
      return response
        .status(400)
        .json({ error: "invalid code. Barcode must contain only numbers" });
    }

    const barcode = service.getCodigoDeBarras(line);
    const dateLast = service.getDataVencimento(line);
    const amount = service.getAmount(line);

    const data = {
      barCode: barcode,
      amount: "20.00",
      expirationDate: "2018-07-16",
    };

    return response.json(data);
  }
}

export { BoletoController };

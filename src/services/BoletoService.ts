import { format } from "date-fns";

class BoletoService {
  async validationTitleBank(line: string) {
    // TODO
  }

  async valitationAgreement(line: string) {
    // TODO
  }

  getCodigoDeBarras(line: string) {
    let codigoBarras = "";
    codigoBarras += line.substring(0, 3);
    codigoBarras += line.substring(3, 4);
    codigoBarras += line.substring(32, 33);
    codigoBarras += line.substring(33, 37);
    codigoBarras += line.substring(37, 47);
    codigoBarras += line.substring(4, 9);
    codigoBarras += line.substring(10, 20);
    codigoBarras += line.substring(21, 31);

    return codigoBarras;
  }

  async getDataVencimento(line: string) {
    const fatorDeVencimento = line.substring(33, 37);
    // const dataBase = moment([1997, 9, 7]);
    if (parseInt(fatorDeVencimento) === 0) return null;
    const date = format(parseInt(fatorDeVencimento), "yyyy-MM-dd");

    return date;
  }

  getAmount(line: string) {
    // const amount = line.substring(9, 20);
    // console.log(amount);
    // return amount;
  }
}

export { BoletoService };

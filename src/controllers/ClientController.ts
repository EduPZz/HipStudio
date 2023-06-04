import { Response, Request } from "express";
import { CreateClientService } from "../services/ClientServices/CreateClientService";
import { ListClientService } from "../services/ClientServices/ListClientsService";

export const store = async (req: Request, res: Response) => {
  const { body } = req;

  const client = {
    telefone: body.telefone,
    email: body.email,
    senha: body.senha,
    nome: body.nome,
    genero_musical: body.genero_musical,
  };

  try {
    const response = await CreateClientService(client);
    res.status(200).json(response);
  } catch (err) {
    res.status(400).json(err);
  }
};

export const index = async (req: Request, res: Response) => {
  try {
    const clients = await ListClientService();
    res.status(200).json(clients);
  } catch (err) {
    res.status(400).json(err);
  }
};

export const update = async (req: Request, res: Response) => {
  const { body } = req;
  const { clientId } = req.params;

  const client = {
    telefone: body.telefone,
    email: body.email,
    senha: body.senha,
    nome: body.nome,
    genero_musical: body.genero_musical,
  };

  try {
    const clients = await UpdateClientService();
    res.status(200).json(clients);
  } catch (err) {
    res.status(400).json(err);
  }
};

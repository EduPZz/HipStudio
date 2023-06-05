import { Request, Response } from "express";
import { CreateClientService } from "../services/ClientServices/CreateClientService";
import { ListClientService } from "../services/ClientServices/ListClientsService";
import { UpdateClientService } from "../services/ClientServices/UpdateClientService";
import { DeleteClientService } from "../services/ClientServices/DeleteClientService";
import { ShowClientService } from "../services/ClientServices/ShowClientService";

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

export const show = async (req: Request, res: Response) => {
  const { clientId } = req.params;

  try {
    const client = await ShowClientService(parseInt(clientId));
    res.status(200).json(client);
  } catch (err) {
    res.status(400).json(err);
  }
};

export const index = async (_: any, res: Response) => {
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

  const data = {
    telefone: body.telefone,
    email: body.email,
    senha: body.senha,
    nome: body.nome,
    genero_musical: body.genero_musical,
  };

  try {
    const client = await UpdateClientService(data, parseInt(clientId));
    res.status(200).json(client);
  } catch (err) {
    res.status(400).json(err);
  }
};

export const remove = async (req: Request, res: Response) => {
  const { clientId } = req.params;

  try {
    const client = await DeleteClientService(parseInt(clientId));
    res.status(200).json(client);
  } catch (err) {
    res.status(400).json(err);
  }
};

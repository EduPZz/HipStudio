import { prisma } from "../../database";

interface Request {
  telefone: string;
  email: string;
  senha: string;
  nome: string;
  genero_musical: string;
}

export const CreateClientService = async (client: Request) => {
  const clientExists = await prisma.cliente.findFirst({
    where: { nome: client.nome },
  });

  if (clientExists) {
    throw "Client alredy existis";
  }

  try {
    await prisma.cliente.create({
      data: client,
    });
    return client;
  } catch (error) {
    return error;
  }
};

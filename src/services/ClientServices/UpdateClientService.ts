import { prisma } from "../../database";

interface Request {
  telefone: string;
  email: string;
  senha: string;
  nome: string;
  genero_musical: string;
}

export const UpdateClientService = async (
  newClient: Request,
  clientId: number
) => {
  const clientExists = await prisma.cliente.findFirst({
    where: { ID_cliente: clientId },
  });

  if (!clientExists) {
    throw "Client don't exists";
  }

  try {
    const client = await prisma.cliente.update({
      where: { ID_cliente: clientId },
      data: newClient,
    });
    return client;
  } catch (error) {
    throw error;
  }
};

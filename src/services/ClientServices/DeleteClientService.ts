import { prisma } from "../../database";

export const DeleteClientService = async (clientId: number) => {
  const clientExists = await prisma.cliente.findFirst({
    where: { ID_cliente: clientId },
  });

  if (!clientExists) {
    throw "Client don't exists";
  }

  try {
    const client = await prisma.cliente.delete({
      where: { ID_cliente: clientId },
    });
    return client;
  } catch (error) {
    throw error;
  }
};

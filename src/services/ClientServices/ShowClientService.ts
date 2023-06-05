import { prisma } from "../../database";

export const ShowClientService = async (id: number) => {
  const client = await prisma.cliente.findUnique({
    where: { ID_cliente: id },
  });

  return client;
};

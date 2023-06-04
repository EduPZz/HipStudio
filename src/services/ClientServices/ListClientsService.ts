import { prisma } from "../../database";

export const ListClientService = async () => {
  const clients = await prisma.cliente.findMany();

  return clients;
};

import { prisma } from "../../database";

export const ShowContractTypeService = async (id: number) => {
  const client = await prisma.tipocontrato.findUnique({
    where: { ID_tipoContrato: id },
  });

  return client;
};

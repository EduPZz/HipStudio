import { prisma } from "../../database";

export const contractTypeService = async (contractTypeId: number) => {
  const contractTypeExists = await prisma.tipocontrato.findFirst({
    where: { ID_tipoContrato: contractTypeId },
  });

  if (!contractTypeExists) {
    throw "Client don't exists";
  }

  try {
    const client = await prisma.tipocontrato.delete({
      where: { ID_tipoContrato: contractTypeId },
    });
    return client;
  } catch (error) {
    throw error;
  }
};

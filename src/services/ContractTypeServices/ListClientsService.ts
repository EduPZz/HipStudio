import { prisma } from "../../database";

export const ListContractTypeService = async () => {
  const contractTypes = await prisma.tipocontrato.findMany();

  return contractTypes;
};

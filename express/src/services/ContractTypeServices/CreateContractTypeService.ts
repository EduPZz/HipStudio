import { prisma } from "../../database";

interface Request {
  nome: string;
  can_music: boolean;
  can_shows: boolean;
  can_albun: boolean;
  can_letra: boolean;
}

export const CreateContractTypeService = async (contractType: Request) => {
  const ContractTypeExists = await prisma.tipocontrato.findFirst({
    where: { nome: contractType.nome },
  });

  if (ContractTypeExists) {
    throw "Contract type alredy exists";
  }

  try {
    await prisma.tipocontrato.create({
      data: contractType,
    });
    return contractType;
  } catch (error) {
    return error;
  }
};

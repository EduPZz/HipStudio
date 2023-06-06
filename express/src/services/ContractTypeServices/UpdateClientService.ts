import { prisma } from "../../database";

interface Request {
  nome: string;
  can_music: boolean;
  can_shows: boolean;
  can_albun: boolean;
  can_letra: boolean;
}

export const UpdateContractTypeService = async (
  newContractType: Request,
  contractTypeId: number
) => {
  const contractTypeExists = await prisma.tipocontrato.findFirst({
    where: { ID_tipoContrato: contractTypeId },
  });

  if (!contractTypeExists) {
    throw "Client don't exists";
  }

  try {
    const contractType = await prisma.cliente.update({
      where: { ID_cliente: contractTypeId },
      data: newContractType,
    });
    return contractType;
  } catch (error) {
    throw error;
  }
};

import { prisma } from "../../database";

export const ShowClientService = async (id: number) => {
  const client = {
    telefone: body.telefone,
    email: body.email,
    senha: body.senha,
    nome: body.nome,
    genero_musical: body.genero_musical,
  };

  const clientExists = await prisma.cliente.findUnique({
    where: { ID_cliente: body.nome },
  });

  if (clientExists) {
    return res.status(400).json({ message: "client already registered" });
  }
  try {
    await prisma.cliente.create({
      data: client,
    });
    res.status(200).json(client);
  } catch (error) {
    console.log(error);
  }
};

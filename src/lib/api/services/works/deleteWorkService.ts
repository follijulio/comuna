import { prismaClient } from "@/lib/db/prisma/prisma";

class DeleteWorkService {
  async deleteService(id: string) {
    const prisma = prismaClient;

    const response = await prisma.work.delete({ where: { id: id } });

    return response;
  }
}

export { DeleteWorkService };

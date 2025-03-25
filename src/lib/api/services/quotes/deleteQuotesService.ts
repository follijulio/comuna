import { prismaClient } from "@/lib/db/prisma/prisma";

class DeleteQuotesService {
  async deleteService(id: string) {
    const prisma = prismaClient;

    const response = await prisma.quote.delete({ where: { id: id } });

    return response;
  }
}

export { DeleteQuotesService };

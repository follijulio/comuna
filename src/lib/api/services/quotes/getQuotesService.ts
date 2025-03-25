import { prismaClient } from "@/lib/db/prisma/prisma";

class GetQuotesService {
  async getService(id: string) {
    const prisma = prismaClient;

    const response = prisma.quote.findUnique({ where: { id: id } });

    return response;
  }
}

export { GetQuotesService };

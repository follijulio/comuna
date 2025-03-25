import { prismaClient } from "@/lib/db/prisma/prisma";

class ListQuotesService {
  async deleteService() {
    const prisma = prismaClient;

    const response = await prisma.quote.findMany()

    return response;
  }
}

export { ListQuotesService  };

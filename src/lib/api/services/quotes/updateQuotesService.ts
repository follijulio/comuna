import { Quote } from "@/lib/db/models/Quote";
import { prismaClient } from "@/lib/db/prisma/prisma";

class UpdateQuotesService {
  async updateService(quote: Quote) {
    const prisma = prismaClient;

    const response = await prisma.quote.update({
      data: { content: quote.content, thinkerId: quote.thinkerId },
      where: { id: quote.id }
    });

    return response;
  }
}

export { UpdateQuotesService };

import { Quote } from "@/lib/db/models/Quote";
import { prismaClient } from "@/lib/db/prisma/prisma";

class CreateQuoteService {
  async createService(quote: Quote) {
    const prisma = prismaClient;
    const response = prisma.quote.create({
      data: {
        thinkerId: quote.thinkerId,
        content: quote.content
      }
    });
    return response;
  }
}

export { CreateQuoteService };

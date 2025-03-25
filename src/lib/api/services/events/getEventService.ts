import { prismaClient } from "@/lib/db/prisma/prisma";

class GetEventService {
  async getService(id: string) {
    const prisma = prismaClient;
    const response = await prisma.event.findUnique({
      where: { id }
    });
    return response;
  }
}

export { GetEventService };

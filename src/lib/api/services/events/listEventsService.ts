import { prismaClient } from "@/lib/db/prisma/prisma";

class ListEventsService {
  async listService() {
    const prisma = prismaClient;
    const response = await prisma.event.findMany();
    return response;
  }
}

export { ListEventsService };

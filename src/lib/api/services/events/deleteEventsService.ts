import { prismaClient } from "@/lib/db/prisma/prisma";

class DeleteEventsService {
  async deleteService(id: string) {
    const prisma = prismaClient;
    const response = await prisma.event.delete({
      where: { id }
    });
    return response;
  }
}

export { DeleteEventsService };

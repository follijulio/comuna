import { prismaClient } from "@/lib/db/prisma/prisma";

class ListWorksServices {
  async listService() {
    const prisma = prismaClient;

    const response = await prisma.work.findMany({
      include: { thinkers: true }
    });

    return response;
  }
}

export { ListWorksServices };

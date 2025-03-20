import { prismaClient } from "@/lib/db/prisma/prisma";

class GetWorkService {
  async getWorkByID(id: string) {
    const prisma = prismaClient;

    const response = await prisma.work.findUnique({
      where: { id: id },
      include: { thinkers: true }
    });

    return response;
  }

  async getWorkByTitle(title: string) {
    const prisma = prismaClient;

    const response = prisma.work.findMany({
      where: { title: title },
      include: { thinkers: true }
    });

    return response;
  }
}

export { GetWorkService };

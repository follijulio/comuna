import { prismaClient } from "@/lib/db/prisma/prisma";

export class DeleteIntellectualsService {
  async deleteService(id: string) {
    const prisma = prismaClient;
    const response = await prisma.thinker.delete({ where: { id: id } });
    return response;
  }
}

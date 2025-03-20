import { prismaClient } from "@/lib/db/prisma/prisma";

export class GetIntellectualService {
  async getService(id: string) {
    const prisma = prismaClient;

    const response = prisma.thinker.findUnique({ where: { id: id } });

    return response;
  }
}

import { prismaClient } from "@/lib/db/prisma/prisma";

export class listIntellectualsService {
  async listService() {
    const prisma = prismaClient;

    const response = await prisma.thinker.findMany();

    return response.map((item) => item);
  }
}

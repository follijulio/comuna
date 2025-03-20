import { Thinker } from "@/lib/db/models/Thinker";
import { prismaClient } from "@/lib/db/prisma/prisma";

export class CreateintellectualsService {
  async createService(thinker: Thinker) {
    const prisma = prismaClient;

    const response = await prisma.thinker.create({
      data: {
        name: thinker.name,
        summary: thinker.summary,
        image: thinker.image,
        birth: new Date(thinker.birth),
        death: thinker.death ? new Date(thinker.death) : null,
        works: {
          create: []
        }
      }
    });

    return response;
  }
}
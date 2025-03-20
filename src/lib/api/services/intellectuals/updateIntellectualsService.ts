import { Thinker } from "@/lib/db/models/Thinker";
import { prismaClient } from "@/lib/db/prisma/prisma";

class UpdateIntellectualsService {
  async updateService(thinker: Thinker) {
    const prisma = prismaClient;

    const birth = new Date(thinker.birth);

    const death = thinker.death ? new Date(thinker.death) : null;

    const response = prisma.thinker.update({
      data: {
        name: thinker.name,
        summary: thinker.summary,
        image: thinker.image,
        birth,
        death,
        works: thinker.works ? { connect: thinker.works.map(id => ({ id })) } : undefined
      },
      where: { id: thinker.id }
    });

    return response;
  }
}

export { UpdateIntellectualsService };

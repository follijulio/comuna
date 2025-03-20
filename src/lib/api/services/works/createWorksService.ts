import { Work } from "@/lib/db/models/Work";
import { prismaClient } from "@/lib/db/prisma/prisma";
import { verifyIntellectuals } from "../../auth/verifyIntellectualls";

class CreateWorkService {
  async createService(work: Work) {
    const prisma = prismaClient;

    const notFound = await verifyIntellectuals(work.thinkers);

    if (notFound) return "One or more intellectuals (thinkers) were not found";

      const year = new Date(parseInt(work.year), 0, 1);
      
      const response = await prisma.work.create({
        data: {
          title: work.title,
          theme: work.theme,
          year,
          thinkers: { connect: work.thinkers.map(id => ({ id })) },
          fullText: work.fullText ?? null,
          image: work.image ?? null,
          link: work.link ?? null
        }
      });


      return response;
   
  }
}

export { CreateWorkService };

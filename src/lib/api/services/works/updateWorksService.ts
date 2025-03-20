import { Work } from "@/lib/db/models/Work";
import { prismaClient } from "@/lib/db/prisma/prisma";
import { verifyIntellectuals } from "../../auth/verifyIntellectualls";
import { GetWorkService } from "./getWorksService";

class UpdateWorkService {
  async updateService(work: Work) {
    if (!work.id) throw new Error("Work ID is undefined");

    const notFoundIntellectual = await verifyIntellectuals(work.thinkers);
    if (notFoundIntellectual) return "One or more intellectuals (thinkers) were not found";

    const getWorkService = new GetWorkService();
    const workFound = await getWorkService.getWorkByID(work.id);
    if (!workFound) return "Work not found";

    const year = new Date(parseInt(work.year, 10), 0, 1);

    const updatedWork = await prismaClient.work.update({
      data: {
        title: work.title,
        theme: work.theme,
        year,
        fullText: work.fullText ? work.fullText : null,
        image: work.image ? work.image : null,
        link: work.link ? work.link : null,
        thinkers: work.thinkers ? { connect: work.thinkers.map(id => ({ id })) } : undefined,
      },
      where: { id: work.id },
    });

    return updatedWork;
  }
}

export { UpdateWorkService };

import { Event } from "@/lib/db/models/Event";
import { prismaClient } from "@/lib/db/prisma/prisma";

class UpdateEventsService {
  async updateService(event: Event) {
    const prisma = prismaClient;

    const year = new Date(event.eventDate);
    const response = await prisma.event.update({
      where: { id: event.id },
      data: {
        title: event.title,
        description: event.description,
        eventDate: year,
        image: event.image
      }
    });
    return response;
  }
}

export { UpdateEventsService };

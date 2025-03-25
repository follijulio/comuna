import { Event } from "@/lib/db/models/Event";
import { prismaClient } from "@/lib/db/prisma/prisma";

class CreateEventsService {
  async createService(event: Event) {
    const prisma = prismaClient;
    console.log(event.image);
    const year = new Date(event.eventDate);

    const response = prisma.event.create({
      data: {
        title: event.title,
        eventDate: year,
        description: event.description,
        image: event.image
      }
    });

    return response;
  }
}
export { CreateEventsService };

import { Event } from "@/lib/db/models/Event";
import { CreateEventsService } from "../../services/events/createEventsService";
import { Message } from "@/lib/db/models/Message";

class CreateEventsController {
  async createController(event: Event) {
    const service = new CreateEventsService();

    console.log(event.image)
    const response = await service.createService(event);
    if (response) {
      return new Message(true, "The event was created", response);
    } else {
      return new Message(false, "The event was not created", response);
    }
  }
}

export { CreateEventsController };

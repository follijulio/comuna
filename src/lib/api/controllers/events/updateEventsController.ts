import { Message } from "@/lib/db/models/Message";
import { UpdateEventsService } from "../../services/events/updateEventsService";
import { Event } from "@/lib/db/models/Event";

class UpdateEventsController {
  async updateController(event: Event) {
    const service = new UpdateEventsService();
    const response = await service.updateService(event);

    if (response) {
      return new Message(true, "Event updated successfully", response);
    } else {
      return new Message(false, "Failed to update event", response);
    }
  }
}

export { UpdateEventsController };

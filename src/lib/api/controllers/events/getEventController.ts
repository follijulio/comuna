import { Message } from "@/lib/db/models/Message";
import { GetEventService } from "../../services/events/getEventService";

class GetEventController {
  async getController(id: string) {
    const service = new GetEventService();
    const response = await service.getService(id);

    if (response) {
      return new Message(true, "Event successfully recovered", response);
    } else {
      return new Message(false, "Event not found", response);
    }
  }
}

export { GetEventController };

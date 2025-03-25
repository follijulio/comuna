import { Message } from "@/lib/db/models/Message";
import { ListEventsService } from "../../services/events/listEventsService";

class ListEventsController {
  async listController() {
    const service = new ListEventsService();
    const response = await service.listService();

    if (response) {
      return new Message(true, "Events successfully listed", response);
    } else {
      return new Message(false, "No events found", response);
    }
  }
}

export { ListEventsController };

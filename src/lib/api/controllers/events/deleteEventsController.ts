import { Message } from "@/lib/db/models/Message";
import { DeleteEventsService } from "../../services/events/deleteEventsService";
import { GetEventService } from "../../services/events/getEventService";

class DeleteEventsController {
  async deleteController(id: string) {
    const get = await new GetEventService().getService(id);

    if (!get) {
      return new Message(false, "the event does not exist");
    }

    const service = new DeleteEventsService();
    const response = await service.deleteService(id);

    if (response) {
      return new Message(true, "event was deleted successfully", response);
    } else {
      return new Message(false, "the event was not deleted");
    }
  }
}

export { DeleteEventsController };

import { Message } from "@/lib/db/models/Message";
import { DeleteQuotesService } from "../../services/quotes/deleteQuotesService";

class DeleteQuotesController {
  async deleteController(id: string) {

    const service = new DeleteQuotesService();

    const response = await service.deleteService(id);

    if (response) {
      return new Message(true, "The Quote was deleted!");
    } else {
      return new Message(false, "The quote was not deleted...");
    }
  }
}
export { DeleteQuotesController };

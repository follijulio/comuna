import { Message } from "@/lib/db/models/Message";
import { GetQuotesService } from "../../services/quotes/getQuotesService";

class GetQuotesController {
  async getController(id: string) {
    const service = new GetQuotesService();

    const response = await service.getService(id);

    if (response) {
      return new Message(true, "The quote was found", response);
    } else {
      return new Message(true, "The quote was not found");
    }
  }
}
export { GetQuotesController };

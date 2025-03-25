import { Quote } from "@/lib/db/models/Quote";
import { UpdateQuotesService } from "../../services/quotes/updateQuotesService";
import { Message } from "@/lib/db/models/Message";

class UpdateQuotesController {
  async updateController(quote: Quote) {
    const service = new UpdateQuotesService();

    const response = await service.updateService(quote);

    if (response) {
      return new Message(true, "The quote has been updated", response);
    } else {
      return new Message(false, "The quote has not been updated");
    }
  }
}

export { UpdateQuotesController };

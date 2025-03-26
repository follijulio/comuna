import { Quote } from "@/lib/db/models/Quote";

import { Message } from "@/lib/db/models/Message";
import { CreateQuoteService } from "../../services/quotes/createQuotesService";

class CreateQuoteController {
  async createController(quote: Quote) {
    const service = new CreateQuoteService();

    const response = await service.createService(quote);

    if (response) {
      return new Message(true, "Quote create!", response);
    } else {
      return new Message(
        false,
        "the quote was not created, something happened."
      );
    }
  }
}

export { CreateQuoteController };

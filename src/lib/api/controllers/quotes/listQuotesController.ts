import { Message } from "@/lib/db/models/Message";
import { ListQuotesService } from "../../services/quotes/listQuotesService";

class ListQuotesController {
  async listController() {
    const service = new ListQuotesService();

    const response = await service.deleteService();

    if (response) {
      return new Message(
        true,
        `${response.length} quotes were found`,
        response
      );
    } else {
      return new Message(true, `no quotes were found `);
    }
  }
}

export { ListQuotesController };

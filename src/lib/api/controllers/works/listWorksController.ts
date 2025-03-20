import { Message } from "@/lib/db/models/Message";
import { ListWorksServices } from "../../services/works/listWorksService";

class ListWorksController {
  async listController() {
    const service = new ListWorksServices();

    const response = await service.listService();

    if (response) {
      return new Message(
        true,
        `${response.length} works were found `,
        response
      );
    } else {
      new Message(false, "no works found.");
    }
  }
}

export { ListWorksController };

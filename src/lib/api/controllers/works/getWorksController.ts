import { Message } from "@/lib/db/models/Message";
import { GetWorkService } from "../../services/works/getWorksService";

class GetWorkController {
  async getById(id: string) {
    const service = new GetWorkService();
    const response = await service.getWorkByID(id);

    if (response) {
      return new Message(true, "work was found", response);
    } else {
      return new Message(false, "work not found");
    }
  }

  async getByTitle(title: string) {
    const service = new GetWorkService();
    const response = await service.getWorkByTitle(title);

    if (response) {
      return new Message(true, "work was found", response);
    } else {
      return new Message(false, "work not found");
    }
  }
}

export { GetWorkController };

import { Work } from "@/lib/db/models/Work";
import { CreateWorkService } from "../../services/works/createWorksService";
import { Message } from "@/lib/db/models/Message";

class CreateWorksController {
  async createController(work: Work) {
    const service = new CreateWorkService();

    const response = await service.createService(work);

    if (response) {
      return new Message(true, "work created!");
    } else {
      return new Message(false, "work not created!", response);
    }
  }
}

export { CreateWorksController };

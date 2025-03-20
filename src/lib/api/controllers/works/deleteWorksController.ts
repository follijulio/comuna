import { Message } from "@/lib/db/models/Message";
import { DeleteWorkService } from "../../services/works/deleteWorkService";

class DeleteWorkController {
  async deleteController(id: string) {
    const service = new DeleteWorkService();

    const response = await service.deleteService(id);

    if (response) {
      return new Message(true, "work was deleted!");
    } else {
      return new Message(false, "the work was not deleted!");
    }
  }
}
export { DeleteWorkController };

import { Message } from "@/lib/db/models/Message";
import { DeleteWorkService } from "../../services/works/deleteWorkService";
import { Auth } from "../../auth/authDelete";

class DeleteWorkController {
  async deleteController(id: string, pass: string) {
    const auth = Auth(pass);

    if (!auth) {
      return new Message(false, "the password is incorrect", null);
    }

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

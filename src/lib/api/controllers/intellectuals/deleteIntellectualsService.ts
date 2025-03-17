import { Message } from "@/lib/db/models/Message";
import { DeleteIntellectualsService } from "../../services/intellectuals/deleteIntellectualsService";

export class DeleteIntellectualsController {
  async deleteController(id: string) {
    const service = new DeleteIntellectualsService();

    const response = await service.deleteService(id);

    if (response) {
      return new Message(true, "the intellectual was deleted", response);
    } else {
      return new Message(
        false,
        "the intellectual was not deleted, something happened.",
        null
      );
    }
  }
}

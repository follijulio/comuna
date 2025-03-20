import { Message } from "@/lib/db/models/Message";
import { DeleteIntellectualsService } from "../../services/intellectuals/deleteIntellectualsService";
import { Auth } from "../../auth/authDelete";

export class DeleteIntellectualsController {
  async deleteController(id: string, pass: string) {
    const auth = Auth(pass);
    
    if (!auth) {
      return new Message(false, "the password is incorrect", null);
    }

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

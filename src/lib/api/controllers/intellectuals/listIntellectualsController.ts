import { Message } from "@/lib/db/models/Message";
import { listIntellectualsService } from "../../services/intellectuals/listIntellectualsServices";

export class listIntellectualsController {
  async listController() {
    const service = new listIntellectualsService();

    const response = await service.listService();
    if (response) {
      return new Message(
        true,
        `${response.length} intellectuals were found`,
        response
      );
    } else {
      return new Message(false, `0 intellectuals were found`, null);
    }
  }
}

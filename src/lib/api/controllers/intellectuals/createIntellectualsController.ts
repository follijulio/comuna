import { CreateintellectualsService } from "@/lib/api/services/intellectuals/createIntellectualsService";
import { Message } from "@/lib/db/models/Message";
import { Thinker } from "@/lib/db/models/Thinker";

export class CreateintellectualsController {
  async createController(thinker: Thinker) {
    const service = new CreateintellectualsService();

    const response = await service.createService(thinker);

    if (response) {
      return new Message(true, "Intellectuals create!", response);
    } else {
      return new Message(
        false,
        "the intellectual was not created, something happened."
      );
    }
  }
}

import { Thinker } from "@/lib/db/models/Thinker";
import { UpdateIntellectualsService } from "../../services/intellectuals/updateIntellectualsService";
import { Message } from "@/lib/db/models/Message";

interface UpdateThinkerInput {
  id: string;
  name: string;
  summary: string;
  image: string;
  birth: string;
  death?: string;
  works?: string[];
}

class UpdateIntellectualsController {
  async updateController({
    name,
    summary,
    image,
    birth,
    death,
    id,
    works
  }: UpdateThinkerInput) {
    const thinker = new Thinker({
      name,
      summary,
      birth,
      image,
      death,
      works,
      id
    });

    const service = new UpdateIntellectualsService();

    const response = await service.updateService(thinker);

    if (response) {
      return new Message(true, "The thinker has been updated");
    } else {
      return new Message(false, "The thinker has not been updated");
    }
  }
}

export { UpdateIntellectualsController };

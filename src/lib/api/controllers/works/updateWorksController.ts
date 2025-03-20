import { Work } from "@/lib/db/models/Work";
import { UpdateWorkService } from "../../services/works/updateWorksService";
import { Message } from "@/lib/db/models/Message";
interface UpdateWorksInput {
  title: string;
  year: string;
  theme: string;
  thinkers: string[];
  link?: string;
  fullText?: string;
  image?: string;
  id: string;
}

class UpdateWorksController {
  async updateController({
    title,
    year,
    theme,
    thinkers,
    fullText,
    image,
    id,
    link
  }: UpdateWorksInput) {
    const work = new Work({
      title,
      year,
      theme,
      thinkers,
      link,
      fullText,
      image,
      id
    });

    const service = new UpdateWorkService();

    const response = await service.updateService(work);

    if (response) {
      return new Message(true, "the work has been updated");
    } else {
      return new Message(false, "the work has not been updated");
    }
  }
}

export { UpdateWorksController };

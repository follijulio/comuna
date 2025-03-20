import { Message } from "@/lib/db/models/Message"
import { GetIntellectualService } from "../../services/intellectuals/getIntellectualsService"

export class GetIntellectualController {
    async getController(id: string){
        const service = new GetIntellectualService()
        const response = await service.getService(id)

        if(response){
            return new Message(true, 'intellectual found', response);
        } else{
            return new Message(false, 'intellectual not found', null);
        }
    }
}
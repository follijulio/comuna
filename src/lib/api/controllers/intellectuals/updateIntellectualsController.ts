// import { UpdateIntellectualsService } from "@/lib/api/services/intellectuals/updateIntellectualsServices";
// import { Message } from "@/lib/db/models/Message";
// import { Thinker } from "@/lib/db/models/Thinker";

// export class UpdateIntellectualsController {
//   console.log("1 - CONTROLLER - TESTE")
//   async updateController(thinker: Thinker, works: string[]) {
//    console.log("2 - CONTROLLER - TESTE")
//     const service = new UpdateIntellectualsService();
//    console.log("3 - CONTROLLER - TESTE")
//     const response = await service.updateService(thinker, works);

//    console.log("4 - CONTROLLER - TESTE")
//     if (response) {
//    console.log("5 - CONTROLLER - TESTE")
//       return new Message(true, "Intellectual atualizado!", response);
//     } else {
//    console.log("5 - CONTROLLER - TESTE")
//       return new Message(false, "Falha ao atualizar o intellectual.");
//     }
//   }
// }

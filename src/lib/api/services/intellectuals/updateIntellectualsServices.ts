// import { Thinker } from "@/lib/db/models/Thinker";
// import { prismaClient } from "@/lib/db/prisma/prisma";

// export class UpdateIntellectualsService {
//   console.log("1 - SERVICE - TESTE")
//   async updateService(thinker: Thinker, works: string[]) {
//     console.log("2 - SERVICE - TESTE")
//     const prisma = prismaClient;
//
//     console.log("3 - SERVICE - TESTE")
//     await prisma.thinker.update({
//       where: { id: thinker.id },
//       data: {
//         name: thinker.name,
//         summary: thinker.summary,
//         image: thinker.image,
//         birth: new Date(thinker.birth),
//         death: thinker.death ? new Date(thinker.death) : null
//       }
//     });
//      console.log("4 - SERVICE - TESTE")

//     const currentAssociations = await prisma.thinkerWork.findMany({
//       where: { thinkerId: thinker.id }
//     });
//      console.log("5 - SERVICE - TESTE")
//     const currentWorkIds = currentAssociations.map(assoc => assoc.workId);
//      console.log("6 - SERVICE - TESTE")

//     const worksToAdd = works.filter(workId => !currentWorkIds.includes(workId));
//      console.log("7 - SERVICE - TESTE")
//     const associationsToRemove = currentAssociations.filter(
//      console.log("8 - SERVICE - TESTE")
//       assoc => !works.includes(assoc.workId)
//     );
//      console.log("9 - SERVICE - TESTE")

//     const addPromises = worksToAdd.map(workId =>
//       prisma.thinkerWork.create({
//         data: {
//           thinker: { connect: { id: thinker.id } },
//           work: { connect: { id: workId } }
//         }
//       })
//     );
//      console.log("10 - SERVICE - TESTE")

//     const removePromises = associationsToRemove.map(assoc =>
//       prisma.thinkerWork.delete({
//         where: { id: assoc.id }
//       })
//     );
//      console.log("11 - SERVICE - TESTE")

//     await Promise.all([...addPromises, ...removePromises]);
//      console.log("12 - SERVICE - TESTE")

//     const finalThinker = await prisma.thinker.findUnique({
//      console.log("12 - SERVICE - TESTE")
//       where: { id: thinker.id },
//       include: { works: true }
//     });
//      console.log("13 - SERVICE - TESTE")

//     return finalThinker;
//   }
// }

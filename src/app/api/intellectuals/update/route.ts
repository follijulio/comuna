import { NextResponse } from "next/server";

export async function PUT(request: Request) {



  return NextResponse.json({message: `${request}`, erro: "ROTA NÃO IMPLEMENTADA AINDA."});
}


// import { UpdateIntellectualsController } from "@/lib/api/controllers/intellectuals/updateIntellectualsController";
// import { Message } from "@/lib/db/models/Message";
// import { Thinker } from "@/lib/db/models/Thinker";
// import { NextResponse } from "next/server";

// export async function PUT(request: Request) {
//   try {
//     console.log("1 - TESTE")
//     const { id, name, summary, image, birth, death, works } = await request.json();
//     console.log("2 - TESTE")    
//  
//     if (!id || !name || !summary || !image || !birth) {
//         return NextResponse.json({ error: "Informações faltando", status: 400 });
//     }
//     console.log("3 - TESTE")
    
//    
//     const thinker = new Thinker(name, summary, birth, image, death, works, id);
//     console.log("4 - TESTE")
    
//     const controller = new UpdateIntellectualsController();
//     console.log("5 - TESTE")
//     const response = await controller.updateController(thinker, works);
//     console.log("6 - TESTE")

//     return NextResponse.json({
//       response: response
//         ? response.message
//         : new Message(false, "Falha ao atualizar o intellectual")
//     });
//   } catch (error) {
//     console.error(error);
//     return NextResponse.json({ error: "Erro interno no servidor", status: 500 });
//   }
// }

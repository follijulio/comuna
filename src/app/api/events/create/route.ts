import { CreateEventsController } from "@/lib/api/controllers/events/createEventsController";
import { Event } from "@/lib/db/models/Event";
import { Message } from "@/lib/db/models/Message";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { title, description, eventDate, image } = await request.json();

    console.log(image)
    if (!title || !description || !eventDate) {
      const message = new Message(false, "missing information");
      return NextResponse.json({ message });
    }
    
    const controller = new CreateEventsController();
    
    const event = new Event(title, description, eventDate, image);
    console.log(event.image)
    

    const response = await controller.createController(event);

    return NextResponse.json({ response });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Internal server error", status: 500 });
  }
}

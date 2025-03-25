class Event {
  id?: string;
  title: string;
  description: string;
  eventDate: string;
  image?: string;

  constructor(
    title: string,
    description: string,
    eventDate: string,
    image?: string,
    id?: string
  ) {
    this.title = title;
    this.description = description;
    this.eventDate = eventDate;
    this.id = id;
    this.image = image;
  }

  serialize(): string {
    return JSON.stringify({
      id: this.id,
      title: this.title,
      description: this.description,
      eventDate: this.eventDate,
      image: this.image
    });
  }

  static deserialize(data: string | object): Event {
    const obj = typeof data === "string" ? JSON.parse(data) : data;
    return new Event(
      obj.title,
      obj.description,
      obj.eventDate,
      obj.id,
      obj.image
    );
  }
}

export { Event };

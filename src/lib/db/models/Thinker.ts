import { ThinkerWork } from "./ThinkerWork";

class Thinker {
  id: string;
  name: string;
  summary: string;
  works: ThinkerWork[];
  image?: string;

  constructor(
    id: string,
    name: string,
    summary: string,
    works: ThinkerWork[],
    image?: string
  ) {
    this.id = id;
    this.name = name;
    this.summary = summary;
    this.works = works;
    this.image = image;
  }

  serialize() {
    return JSON.stringify({
      id: this.id,
      name: this.name,
      summary: this.summary,
      works: this.works.map(work => work.serialize()),
      image: this.image
    });
  }

  static deserialize(data: string): Thinker {
    const obj = JSON.parse(data);
    const works = obj.works.map((work: unknown) =>
      ThinkerWork.deserialize(
        work as { id: string; thinkerId: string; workId: string }
      )
    );
    return new Thinker(obj.id, obj.name, obj.summary, works, obj.image);
  }
}

export { Thinker };

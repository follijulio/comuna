import { ThinkerWork } from "./ThinkerWork";

class Thinker {
  id?: string;
  name: string;
  summary: string;
  image: string;
  birth: string;
  works?: string[];
  death?: string;

  constructor(parameters: {
    name: string;
    summary: string;
    birth: string;
    image: string;
    death?: string;
    works?: string[];
    id?: string;
  }) {
    this.id = parameters.id;
    this.name = parameters.name;
    this.summary = parameters.summary;
    this.works = parameters.works;
    this.image = parameters.image;
    this.birth = parameters.birth;
    this.death = parameters.death;
  }

  serialize() {
    return JSON.stringify({
      id: this.id,
      name: this.name,
      summary: this.summary,
      works: this.works,
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
    return new Thinker({
      id: obj.id,
      name: obj.name,
      summary: obj.summary,
      works: works,
      image: obj.image,
      birth: obj.birth,
      death: obj.death
    });
  }
}

export { Thinker };

import { ThinkerWork } from "./ThinkerWork";

class Work {
  id: string;
  title: string;
  year: number;
  theme: string;
  link?: string;
  fullText?: string;
  image?: string;
  thinkers: ThinkerWork[];

  constructor(parameters: {
    id: string;
    title: string;
    year: number;
    theme: string;
    link?: string;
    fullText?: string;
    image?: string;
    thinkers: ThinkerWork[];
  }) {
    this.id = parameters.id;
    this.title = parameters.title;
    this.year = parameters.year;
    this.theme = parameters.theme;
    this.link = parameters.link;
    this.fullText = parameters.fullText;
    this.image = parameters.image;
    this.thinkers = parameters.thinkers;
  }

  serialize() {
    return JSON.stringify({
      id: this.id,
      title: this.title,
      year: this.year,
      theme: this.theme,
      link: this.link,
      fullText: this.fullText,
      image: this.image,
      thinkers: this.thinkers.map(t => t.serialize())
    });
  }

  static deserialize(jsonString: string): Work {
    const data = JSON.parse(jsonString);
    return new Work({
      id: data.id,
      title: data.title,
      year: data.year,
      theme: data.theme,
      link: data.link,
      fullText: data.fullText,
      image: data.image,
      thinkers: data.thinkers.map((t: unknown) =>
        ThinkerWork.deserialize(
          t as { id: string; thinkerId: string; workId: string }
        )
      )
    });
  }
}

export { Work };

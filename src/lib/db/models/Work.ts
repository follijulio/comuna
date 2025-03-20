class Work {
  id?: string;
  title: string;
  year: string;
  theme: string;
  link?: string;
  fullText?: string;
  image?: string;
  thinkers: string[];

  constructor(parameters: {
    title: string;
    year: string;
    theme: string;
    thinkers: string[];
    link?: string;
    fullText?: string;
    image?: string;
    id?: string;
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
      thinkers: this.thinkers
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
      thinkers: data.thinkers
    });
  }
}

export { Work };

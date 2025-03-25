import { Thinker } from "./Thinker";

class Quote {
  id?: string;
  content: string;
  thinkerId: string;

  constructor(content: string, thinkerId: string, id?: string) {
    this.id = id;
    this.content = content;
    this.thinkerId = thinkerId;
  }

  serialize(): string {
    return JSON.stringify({
      id: this.id,
      content: this.content,
      thinkerId: this.thinkerId
    });
  }

  static deserialize(json: string): Quote {
    const data = JSON.parse(json);
    return new Quote(data.id, data.content, data.thinkerId);
  }
}

export { Quote };

export class QuoteWithThinker {
  content: string;
  thinker: Thinker;
  constructor(content: string, thinker: Thinker) {
    this.content = content;
    this.thinker = thinker;
  }
}
class ThinkerWork {
  id: string;
  thinkerId: string;
  workId: string;

  constructor(id: string, thinkerId: string, workId: string) {
    this.id = id;
    this.thinkerId = thinkerId;
    this.workId = workId;
  }

  serialize() {
    return {
      id: this.id,
      thinkerId: this.thinkerId,
      workId: this.workId
    };
  }

  static deserialize(data: {
    id: string;
    thinkerId: string;
    workId: string;
  }): ThinkerWork {
    return new ThinkerWork(data.id, data.thinkerId, data.workId);
  }
}

export { ThinkerWork };

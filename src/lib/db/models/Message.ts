class Message {
  sucess: boolean;
  message: string;
  data?: unknown;

  constructor(sucess: boolean, message: string, data?: unknown) {
    this.sucess = sucess;
    this.message = message;
    this.data = data;
  }
}

export { Message };
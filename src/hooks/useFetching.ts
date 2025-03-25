import axios from "axios";
import { Thinker } from "@/lib/db/models/Thinker";
import { Quote, QuoteWithThinker } from "@/lib/db/models/Quote";

export class ApiService {
  static async fetchThinkers() {
    try {
      const { data } = await axios.get(
        "http://localhost:3000/api/intellectuals/list"
      );

      const response = data.response as { data: Thinker[] };

      return response.data;
    } catch (error) {
      console.error("Error fetching thinker:", error);
      return [];
    }
  }

  static async fetchQuotes() {
    try {
      console.log("1");
      const { data } = await axios.get("http://localhost:3000/api/quotes/list");
      console.log(data.response.data);
      const quotesArray = data.response.data;

      const quotes: QuoteWithThinker[] = [];
      quotesArray.forEach(async (quote: Quote) => {
        const thinker = await axios.post(
          "http://localhost:3000/api/intellectuals/get",
          quote.thinkerId
        );
        console.log("THINKER: ",thinker);
      });

      return quotes;

      // const response = data as { data: Quote[] };
      // return response.data;
    } catch (error) {
      console.error("Error fetching quotes:", error);
    }
  }
}

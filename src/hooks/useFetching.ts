import axios from "axios";
import { Thinker } from "@/lib/db/models/Thinker";
import { Quote, QuoteWithThinker } from "@/lib/db/models/Quote";
import { Event } from "@/lib/db/models/Event";

export class ApiService {
  static async fetchThinkers(): Promise<{ thinkers: Thinker[] }> {
    try {
      const { data } = await axios.get(
        "http://localhost:3000/api/intellectuals/list"
      );
      const response = data.response as { data: Thinker[] };
      const thinkers = response.data;
      return { thinkers };
    } catch (error) {
      console.error("Error fetching thinker:", error);
      return { thinkers: [] };
    }
  }

  static async fetchQuotes(): Promise<{ quotes: QuoteWithThinker[] }> {
    try {
      const { data } = await axios.get("http://localhost:3000/api/quotes/list");
      const quotesArray = data.response.data as Quote[];

      const quotes: QuoteWithThinker[] = await fetchQuotesAndThinkers(
        quotesArray
      );

      return { quotes };
    } catch (error) {
      console.error("Error fetching quotes:", error);
      return { quotes: [] };
    }

    
    async function fetchQuotesAndThinkers(
      quotesArray: Quote[]
    ): Promise<QuoteWithThinker[]> {
      return await Promise.all(
        quotesArray.map(async (quote: Quote) => {
          const dataThinker = await axios.post(
            "http://localhost:3000/api/intellectuals/get",
            { id: quote.thinkerId }
          );
          const thinker = dataThinker.data.response.data as Thinker;
          return new QuoteWithThinker(quote.content, thinker);
        })
      );
    }
  }

  static async fetchEvents(): Promise<{ events: Event[] }> {
    try {
      const { data } = await axios.get("http://localhost:3000/api/events/list");

      const events = data.response?.data || [];

      return { events };

      
    } catch (error) {
      console.error("Error fetching events:", error);
      return { events: [] };
    }
  }
}

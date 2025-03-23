import axios from "axios";
import { Thinker } from "@/lib/db/models/Thinker";

export class ApiService {
  static async fetchThinkers(): Promise<Thinker[]> {
    try {
      const { data } = await axios.get(
        "http://localhost:3000/api/intellectuals/list"
      );

      const response = data.response as { data: Thinker[] };

      return response.data;
    } catch (error) {
      console.error("Error fetching data:", error);
      return [];
    }
  }
}

import axios from "axios";

const baseUrl = "https://api.quicksell.co/v1/internal/frontend-assignment";

class Data {
  async fetchData() {
    try {
      const response = await axios.get(baseUrl);
      if (response.status === 200) {
        console.log(response.data);
        return response.data;
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      return null;
    }
  }
}

const DataInstance = new Data();
export default DataInstance;

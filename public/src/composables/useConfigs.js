// composables/useConfigs.js
import { ref } from 'vue';
import axios from 'axios';


export const useConfigs = () => {
  // Key Messages grouped by category
  const getConfigs = async () => {
    try {
      let url = "";
      process.env.NODE_ENV == "development"
        ? (url = "http://localhost:3000/api/configs")
        : (url = "/api/configs");
      let results = await axios.get(url);
      return results?.data?.payload;
    } catch (error) {
      console.log("Error", error);
      return null;
    }
  };

  return {
    getConfigs,
  };
};
